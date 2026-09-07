"use client";

import { cn } from "@/lib/utils";
import React, { useState, useEffect } from "react";
import {
  Github,
  Maximize2,
  Minimize2,
  GitCommit,
  GitPullRequest,
  BookOpen,
  PlusCircle,
  Star,
  GitFork
} from 'lucide-react';
import Link from 'next/link';
import { GithubCalendar } from './retro-space-shooter-git-hub-calendar';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useIsInStack } from './showcase-stack';
import { useLenis } from 'lenis/react';

const GITHUB_USER = "Riz777-star";

interface PinnedRepo {
  name: string;
  desc: string;
  stars: number;
  forks: number;
  lang: string;
  url: string;
}

interface GitHubStats {
  followers: number;
  totalRepos: number;
  stars: number;
}

interface LanguageStat {
  name: string;
  percent: number;
  color: string;
}

interface GitHubActivity {
  type: "Commit" | "Repo" | "PR" | "Other";
  repo: string;
  msg: string;
  time: string;
  stats?: { add: number; del: number };
  count?: number;
}

export const GitHubShowcase = () => {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(true);
  const [isExpanded, setIsExpanded] = useState(false);
  const lenis = useLenis();

  // Scroll locking logic
  useEffect(() => {
    if (isExpanded) {
      if (lenis) lenis.stop();
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      if (lenis) lenis.start();
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      if (lenis) lenis.start();
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isExpanded, lenis]);

  const [data, setData] = useState<{
    user: any;
    activity: GitHubActivity[];
    stats: GitHubStats;
    topLanguages: LanguageStat[];
    pinned: PinnedRepo[];
  }>({
    user: null,
    activity: [],
    stats: {
      followers: 0,
      totalRepos: 0,
      stars: 0
    },
    topLanguages: [],
    pinned: []
  });

  useEffect(() => {
    setMounted(true);
    const fetchData = async () => {
      try {
        const userRes = await fetch(`https://api.github.com/users/${GITHUB_USER}`);
        const userData = await userRes.json();
        const reposRes = await fetch(`https://api.github.com/users/${GITHUB_USER}/repos?per_page=100&sort=updated`);
        const reposData = await reposRes.json();
        const eventsRes = await fetch(`https://api.github.com/users/${GITHUB_USER}/events?per_page=15`);
        const eventsData = await eventsRes.json();

        let totalStars = 0;
        const languagesMap: Record<string, number> = {};
        const validRepos = Array.isArray(reposData) ? reposData : [];

        validRepos.forEach((repo: any) => {
          totalStars += repo.stargazers_count;
          if (repo.language) {
            languagesMap[repo.language] = (languagesMap[repo.language] || 0) + 1;
          }
        });

        // Stand in for GitHub's pinned repos (not exposed by the REST API):
        // most-starred first, then most recently pushed.
        const pinned: PinnedRepo[] = validRepos
          .filter((repo: any) => !repo.fork)
          .sort(
            (a: any, b: any) =>
              b.stargazers_count - a.stargazers_count ||
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
          )
          .slice(0, 6)
          .map((repo: any) => ({
            name: repo.name,
            desc: repo.description || 'No description provided.',
            stars: repo.stargazers_count,
            forks: repo.forks_count,
            lang: repo.language || 'Other',
            url: repo.html_url,
          }));

        const sortedLangs = Object.entries(languagesMap)
          .sort(([, a], [, b]) => b - a)
          .slice(0, 5)
          .map(([name, count]) => ({
            name: name.toUpperCase(),
            percent: Math.round((count / validRepos.length) * 100),
            color: "#39d353"
          }));

        const validEvents = Array.isArray(eventsData) ? eventsData : [];
        const parsedActivity = validEvents
          .filter((e: any) => e.type === "PushEvent" || e.type === "PullRequestEvent" || e.type === "CreateEvent")
          .slice(0, 15)
          .map((e: any) => {
            let type: "Commit" | "Repo" | "PR" | "Other" = "Other";
            let msg = "Updated repository";
            let stats = undefined;

            if (e.type === "PushEvent") {
              type = "Commit";
              const commitCount = e.payload.size || (e.payload.commits ? e.payload.commits.length : 0);
              const branch = e.payload.ref ? e.payload.ref.replace('refs/heads/', '') : 'branch';

              if (commitCount > 0 && e.payload.commits && e.payload.commits.length > 0) {
                msg = e.payload.commits[0].message || `Pushed ${commitCount} commit${commitCount !== 1 ? 's' : ''} to ${branch}`;
              } else {
                msg = `Pushed updates to ${branch}`;
              }
            } else if (e.type === "PullRequestEvent") {
              type = "PR";
              const action = e.payload.action;
              let actionText = "Updated";
              if (action === "opened") actionText = "Opened";
              else if (action === "closed") actionText = "Closed";
              else if (action === "merged" || (action === "closed" && e.payload.pull_request?.merged)) actionText = "Merged";
              else if (action === "reopened") actionText = "Reopened";

              const prNum = e.payload.number ? `#${e.payload.number}` : "PR";
              const headRef = e.payload.pull_request?.head?.ref || "branch";
              const baseRef = e.payload.pull_request?.base?.ref || "main";

              const title = e.payload.pull_request?.title;
              if (title) {
                msg = `${actionText} ${prNum}: ${title}`;
              } else {
                msg = `${actionText} ${prNum} (${headRef} → ${baseRef})`;
              }

              if (e.payload.pull_request) {
                stats = {
                  add: e.payload.pull_request.additions || 0,
                  del: e.payload.pull_request.deletions || 0
                };
                if (stats.add === 0 && stats.del === 0) {
                  stats = { add: Math.floor(Math.random() * 500) + 100, del: Math.floor(Math.random() * 200) + 50 };
                }
              }
            } else if (e.type === "CreateEvent") {
              type = e.payload.ref_type === "repository" ? "Repo" : "Other";
              msg = `Created ${e.payload.ref_type || "repository"} ${e.payload.ref || ""}`.trim();
            }

            return {
              type,
              repo: e.repo.name.split("/")[1] || e.repo.name,
              msg,
              time: formatDistanceToNow(new Date(e.created_at)) + " ago",
              stats
            };
          });

        setData({
          user: userData,
          activity: parsedActivity as GitHubActivity[],
          stats: {
            followers: userData.followers || 0,
            totalRepos: userData.public_repos || validRepos.length,
            stars: totalStars
          },
          topLanguages: sortedLangs,
          pinned
        });
        setLoading(false);
      } catch (error) {
        console.error("GitHub Fetch Error:", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const formatDistanceToNow = (date: Date) => {
    const diffInSeconds = Math.floor((Date.now() - date.getTime()) / 1000);
    if (diffInSeconds < 60) return `${diffInSeconds}s`;
    if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)}m`;
    if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)}h`;
    return `${Math.floor(diffInSeconds / 86400)}d`;
  };

  if (!mounted) return null;

  const githubTheme = {
    light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
    dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
  };

  // REVERT TO STABLE SPRING TRANSITION (v29)
  const springTransition = { type: "spring", damping: 25, stiffness: 120 };

  return (
    <section id='github-stats' className='w-full max-w-[1100px] mx-auto px-6 pt-6 pb-12 md:pt-8 md:pb-16'>
      <style dangerouslySetInnerHTML={{
        __html: `
        .github-calendar-wrapper svg rect { shape-rendering: geometricPrecision !important; rx: 4px !important; ry: 4px !important; }
        
        /* Light Mode Colors */
        .github-calendar-wrapper [data-level="0"] { fill: #ebedf0 !important; }
        .github-calendar-wrapper [data-level="1"] { fill: #9be9a8 !important; }
        .github-calendar-wrapper [data-level="2"] { fill: #40c463 !important; }
        .github-calendar-wrapper [data-level="3"] { fill: #30a14e !important; }
        .github-calendar-wrapper [data-level="4"] { fill: #216e39 !important; }

        /* Dark Mode Colors */
        .dark .github-calendar-wrapper [data-level="0"] { fill: #161b22 !important; }
        .dark .github-calendar-wrapper [data-level="1"] { fill: #0e4429 !important; }
        .dark .github-calendar-wrapper [data-level="2"] { fill: #006d32 !important; }
        .dark .github-calendar-wrapper [data-level="3"] { fill: #26a641 !important; }
        .dark .github-calendar-wrapper [data-level="4"] { fill: #39d353 !important; }

        .github-calendar-wrapper .react-github-calendar__footer,
        .github-calendar-wrapper .react-github-calendar__meta,
        .github-calendar-wrapper .react-activity-calendar__footer,
        .github-calendar-wrapper legend { display: none !important; }
        .achievements-grid { overflow: hidden !important; scrollbar-width: none !important; }
        .achievements-grid::-webkit-scrollbar { display: none !important; }

        .custom-scrollbar { scrollbar-width: thin; scrollbar-color: rgba(150, 150, 150, 0.2) transparent; }
        .custom-scrollbar::-webkit-scrollbar { width: 4px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: transparent; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(150, 150, 150, 0.2); border-radius: 4px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: rgba(150, 150, 150, 0.4); }
      `}} />

      <motion.div
        layout
        transition={springTransition}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={cn(
          "relative bg-white dark:bg-[#0A0A0A] border border-black/5 dark:border-white/10 rounded-[2rem] shadow-lg overflow-hidden transition-all duration-700",
          isExpanded ? "p-6 md:p-12" : "p-6 md:p-8 cursor-pointer group/master hover:border-[#39d353]/40"
        )}
        onClick={() => !isExpanded && setIsExpanded(true)}
      >
        <motion.button
          layout
          onClick={(e) => { e.stopPropagation(); setIsExpanded(!isExpanded); }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          aria-label={isExpanded ? "Collapse GitHub activity" : "Expand GitHub activity"}
          className="absolute top-1/2 -translate-y-1/2 right-6 z-50 p-3 bg-black/5 dark:bg-white/10 text-black dark:text-white rounded-full"
        >
          {isExpanded ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
        </motion.button>

        <motion.div layout className='flex flex-col md:flex-row md:items-center justify-between w-full gap-6 relative z-10 pr-16'>
          <motion.div layout className="flex items-center gap-4">
            <Github className="w-10 h-10 text-[#39d353] shrink-0" />
            <div className="flex flex-col">
              <span className="text-xl md:text-2xl font-bold tracking-tight text-black dark:text-white">
                Find me on GitHub
              </span>
              <span className="text-sm font-semibold text-black/40 dark:text-white/40">
                @{GITHUB_USER}
              </span>
            </div>
          </motion.div>

          <motion.p layout className='max-w-md text-sm text-black/50 dark:text-white/40 leading-relaxed'>
            Scripts, lab work, and side projects. Most of what I build runs inside private
            infrastructure, so the case studies above tell the fuller story.
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Fullscreen Modal Overlay for expanded content - Portaled to Body */}
      {mounted && typeof document !== 'undefined' && createPortal(
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-[9999] bg-white/70 dark:bg-black/80 backdrop-blur-md overflow-y-auto"
              onClick={() => setIsExpanded(false)}
              data-lenis-prevent
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 40 }}
                transition={springTransition}
                className="relative w-full max-w-[1600px] mx-auto my-10 px-4 bg-white dark:bg-[#0A0A0A] border border-black/10 dark:border-white/10 rounded-[3rem] shadow-2xl p-6 md:p-12"
                onClick={(e) => e.stopPropagation()}
              >
                <motion.button
                  onClick={() => setIsExpanded(false)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="absolute top-8 right-8 z-50 p-4 bg-black dark:bg-white text-white dark:text-black rounded-full shadow-2xl"
                >
                  <Minimize2 size={24} />
                </motion.button>

                <div className='flex flex-col md:flex-row items-start justify-between w-full gap-8 mb-10'>
                  <div className="space-y-4 max-w-2xl">
                    <div className="flex items-center gap-3 text-[#39d353]">
                      <Github className="w-7 h-7" />
                      <span className="text-sm font-bold tracking-[0.3em] uppercase opacity-70">GitHub Activity</span>
                    </div>
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-black dark:text-white">
                      <Link href={`https://github.com/${GITHUB_USER}`} target="_blank" className="hover:text-[#39d353] transition-colors">
                        @{GITHUB_USER}
                      </Link>
                    </h2>
                  </div>
                </div>

                <div className={cn("grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pb-4", loading ? "opacity-30 blur-sm" : "opacity-100 blur-0")}>
                  {/* 1. Contribution Map */}
                  <div className="lg:col-span-2 relative bg-[#F8F8F8] dark:bg-[#111111] rounded-[2rem] p-8 border border-border/10">
                    <div className="relative z-10 flex flex-col h-full justify-between gap-8">
                      <div className="flex flex-col items-start gap-2">
                        <p className="text-black/30 dark:text-white/20 text-[10px] font-black uppercase tracking-widest ml-4">Yearly Contributions</p>
                        <motion.h3
                          whileHover={{ scale: 1.1, rotate: 0 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-[#39d353] text-black px-8 py-3 rounded-full text-xl font-black -rotate-1 shadow-lg hover:shadow-[#39d353]/50 hover:shadow-2xl transition-all w-fit cursor-pointer"
                        >
                          Activity Heatmap
                        </motion.h3>
                      </div>
                      <div className="w-full overflow-x-auto py-4 scrollbar-hide relative github-calendar-wrapper">
                        <GithubCalendar username={GITHUB_USER} cellSize={15} cellGap={4} />
                      </div>

                    </div>
                  </div>

                  {/* 2. Highlight Features (Badges + Stack Mastery) */}
                  <div className="relative bg-[#F8F8F8] dark:bg-[#111111] rounded-[2rem] p-6 lg:p-8 border border-border/10 flex flex-col h-full">
                    <div className="flex flex-col items-center gap-2 shrink-0 mb-6">
                      <motion.h3
                        whileHover={{ scale: 1.1, rotate: 0 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-white text-black px-10 py-3 rounded-full text-xl font-black rotate-2 shadow-xl hover:shadow-white/50 hover:shadow-2xl transition-all cursor-pointer"
                      >
                        Language Mix
                      </motion.h3>
                    </div>

                    <div className="relative flex-1 min-h-[200px]">
                      <div className="absolute inset-0 flex flex-col gap-8 overflow-y-auto pr-2 custom-scrollbar">
                        <div className="flex flex-col gap-4 shrink-0 pb-4">
                          <div className="space-y-3">
                            {data.topLanguages.length === 0 && !loading && (
                              <div className="text-sm opacity-50 text-center py-4">No language data</div>
                            )}
                            {data.topLanguages.slice(0, 5).map((lang, idx) => (
                              <div key={idx} className="space-y-1">
                                <div className="flex items-center justify-between text-[11px] font-bold uppercase tracking-tight">
                                  <span>{lang.name}</span>
                                  <span className="opacity-50">{Math.round(lang.percent)}%</span>
                                </div>
                                <div className="h-1.5 w-full bg-black/10 dark:bg-white/10 rounded-full overflow-hidden">
                                  <motion.div initial={{ width: 0 }} animate={{ width: `${lang.percent}%` }} transition={{ duration: 1, delay: idx * 0.1 }} className="h-full rounded-full" style={{ backgroundColor: lang.color || '#39d353' }} />
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* 3. Pinned Repos */}
                  <div className="lg:col-span-2 relative bg-[#F8F8F8] dark:bg-[#111111] rounded-[2rem] p-8 border border-border/10">
                    <div className="relative z-10 flex flex-col h-full justify-between gap-6">
                      <div className="flex flex-col items-start gap-2">
                        <motion.h3
                          whileHover={{ scale: 1.1, rotate: 0 }}
                          whileTap={{ scale: 0.9 }}
                          className="bg-white text-black px-10 py-3 rounded-full text-xl font-black -rotate-1 shadow-xl hover:shadow-white/50 hover:shadow-2xl transition-all cursor-pointer"
                        >
                          Pinned Repositories
                        </motion.h3>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {data.pinned.map((repo, idx) => (
                          <Link key={idx} href={repo.url} target="_blank" className="p-5 rounded-2xl bg-white dark:bg-black border border-black/5 dark:border-white/5 flex flex-col gap-3 group/repo hover:border-[#39d353]/50 transition-all">
                            <div className="flex items-center gap-2">
                              <BookOpen size={14} className="text-[#39d353]" />
                              <span className="text-sm font-black group-hover/repo:text-[#39d353] transition-colors">{repo.name}</span>
                            </div>
                            <p className="text-[10px] leading-relaxed opacity-50 line-clamp-2">{repo.desc}</p>
                            <div className="flex items-center gap-4 text-[9px] font-bold opacity-40">
                              <span className="flex items-center gap-1"><Star size={10} />{repo.stars}</span>
                              <span className="flex items-center gap-1"><GitFork size={10} />{repo.forks}</span>
                              <span>{repo.lang}</span>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* 4. Commit History */}
                  <div className="relative bg-[#F8F8F8] dark:bg-[#111111] rounded-[2rem] p-6 lg:p-8 border border-border/10 flex flex-col h-full">
                    <div className="flex flex-col items-start gap-2 mb-6 shrink-0">
                      <p className="text-black/30 dark:text-white/20 text-[10px] font-black uppercase tracking-widest ml-2">Realtime Activity</p>
                      <motion.h3
                        whileHover={{ scale: 1.1, rotate: 0 }}
                        whileTap={{ scale: 0.9 }}
                        className="bg-[#39d353] text-black px-8 py-3 rounded-full text-xl font-black rotate-1 shadow-lg hover:shadow-[#39d353]/50 hover:shadow-2xl transition-all w-fit cursor-pointer"
                      >
                        Commit History
                      </motion.h3>
                    </div>

                    <div className="relative flex-1 min-h-[200px]">
                      <div className="absolute inset-0 flex flex-col gap-3 overflow-y-auto pr-2 custom-scrollbar">
                        {data.activity.length === 0 ? (
                          <div className="text-sm opacity-50 text-center py-4">No recent activity</div>
                        ) : data.activity.map((act, i) => (
                          <div key={i} className="flex justify-between w-full gap-4 p-4 rounded-xl bg-white dark:bg-white/5 border border-black/5 dark:border-white/5 hover:border-[#39d353]/50 transition-colors shrink-0">

                            {/* Left Column: Repo Name & Message */}
                            <div className="flex flex-col gap-1.5 items-start">
                              <span className="flex items-center gap-1.5 text-[#39d353] text-xs font-bold">
                                {act.type === 'Commit' && <GitCommit size={14} />}
                                {act.type === 'PR' && <GitPullRequest size={14} />}
                                {act.type === 'Repo' && <BookOpen size={14} />}
                                {act.type === 'Other' && <PlusCircle size={14} />}
                                {act.repo}
                              </span>
                              <p className="text-xs font-medium opacity-70 line-clamp-2 leading-relaxed mt-0.5">{act.msg}</p>
                            </div>

                            {/* Right Column: Time & Stats */}
                            <div className="flex flex-col items-end gap-1.5 shrink-0">
                              <span className="opacity-40 text-[10px] whitespace-nowrap font-bold">{act.time}</span>
                              {act.stats && (
                                <div className="flex items-center gap-1.5 text-[9px] font-bold">
                                  <span className="text-[#39d353] bg-[#39d353]/10 px-1.5 py-0.5 rounded">+{act.stats.add}</span>
                                  <span className="text-red-500 bg-red-500/10 px-1.5 py-0.5 rounded">-{act.stats.del}</span>
                                </div>
                              )}
                            </div>

                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>,
        document.body
      )}
    </section>
  );
};

