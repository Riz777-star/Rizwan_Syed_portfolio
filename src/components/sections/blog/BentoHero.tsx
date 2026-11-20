
'use client';

import { motion, useScroll, useTransform, AnimatePresence, useMotionValue, useMotionTemplate } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import {
  TrendUp, ArrowUpRight, Check, CircleNotch, Sparkle, Hash,
  Brain, Code, TerminalWindow, ShieldCheck, Robot, Atom, Database, Cpu, FileText, Lightning, Globe, Stack
} from '@phosphor-icons/react';
import { portfolioData } from '@/data/portfolio';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatedFolder } from '@/components/ui/3d-folder';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';

/* ──────────────────────────────────────────────────────
   Helper to map Categories/Tags to Icons
────────────────────────────────────────────────────── */
const getIconForText = (text: string) => {
  const t = text.toLowerCase();
  if (t.includes('ai') || t.includes('agent') || t.includes('intelligence') || t.includes('machine learning')) return Brain;
  if (t.includes('react') || t.includes('next') || t.includes('frontend')) return Atom;
  if (t.includes('security') || t.includes('auth') || t.includes('cyber')) return ShieldCheck;
  if (t.includes('data') || t.includes('sql') || t.includes('database')) return Database;
  if (t.includes('iot') || t.includes('hardware') || t.includes('embedded') || t.includes('system')) return Cpu;
  if (t.includes('software') || t.includes('code') || t.includes('engineering') || t.includes('dev')) return Code;
  if (t.includes('web') || t.includes('cloud') || t.includes('network')) return Globe;
  if (t.includes('architecture') || t.includes('design') || t.includes('layout')) return Stack;
  if (t.includes('fast') || t.includes('performance') || t.includes('optimization')) return Lightning;
  if (t.includes('terminal') || t.includes('cli') || t.includes('bash')) return TerminalWindow;
  return FileText;
};

/* ──────────────────────────────────────────────────────
   Bento Grid Components (Adapted from AgentBentoGrid)
────────────────────────────────────────────────────── */

interface FeatCardProps {
  title: string;
  description: string;
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export function FeatCard({ title, description, children, className = "", innerClassName = "" }: FeatCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "group relative flex flex-col gap-2 p-4",
        className
      )}
    >
      <div className="absolute inset-0 rounded-[20px] bg-white/60 dark:bg-neutral-900/40 backdrop-blur-2xl border border-white/50 dark:border-white/10 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_-8px_rgba(0,0,0,0.3)] overflow-hidden pointer-events-none" />

      <div className="z-10 flex flex-col relative">
        <h3 className="font-semibold text-foreground text-sm tracking-tight">{title}</h3>
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
          <div className="overflow-hidden">
            <p className="text-muted-foreground text-xs leading-relaxed max-w-[90%] pt-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
              {description}
            </p>
          </div>
        </div>
      </div>
      <div className={cn("relative mt-2 flex-1 w-full rounded-[14px] overflow-hidden border border-border/50 bg-background/50 dark:bg-neutral-950/50 z-10", innerClassName)}>
        {children}
      </div>
    </motion.div>
  );
}

/* ── Card 1: Featured Carousel ── */
function FeaturedVisual({ posts, currentSlide, isLowPowerMode }: any) {
  const t = useTranslations('blog');
  const currentPost = posts[currentSlide];
  return (
    <div className="relative w-full h-full group flex flex-col justify-end p-6 lg:p-8 overflow-hidden rounded-[14px]">
      <div className="absolute inset-0 bg-muted" />
      <AnimatePresence initial={false}>
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
          className="absolute inset-0 z-0"
        >
          <Image
            src={currentPost.image}
            alt={currentPost.title}
            fill
            sizes="(max-width: 1024px) 100vw, 800px"
            className="object-cover opacity-60 grayscale-[30%] group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        </motion.div>
      </AnimatePresence>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={isLowPowerMode ? { opacity: 0 } : { opacity: 0, y: 20 }}
          animate={isLowPowerMode ? { opacity: 1 } : { opacity: 1, y: 0 }}
          exit={isLowPowerMode ? { opacity: 0 } : { opacity: 0, y: -20 }}
          className="relative z-10 max-w-2xl"
        >
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-2.5 py-0.5 bg-foreground text-background text-sm font-semibold rounded-full">
              Featured
            </span>
            <span className="text-sm font-medium text-foreground dark:text-foreground bg-background/80 backdrop-blur-sm px-2 py-0.5 rounded-full shadow-sm">
              {t(`categories.${currentPost.category}`)}
            </span>
          </div>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-foreground mb-4 leading-tight tracking-tight drop-shadow-md">
            <Link href={`/blog/${currentPost.slug}`} className="hover:text-primary transition-colors">
              {currentPost.title}
            </Link>
          </h2>
          <div className="flex items-center gap-6">
            <Link
              href={`/blog/${currentPost.slug}`}
              className="flex items-center gap-2 text-sm font-semibold text-foreground hover:text-primary transition-colors bg-background/80 backdrop-blur-sm px-3 py-1.5 rounded-full shadow-sm"
            >
              Read the story
            </Link>
            <div className="flex gap-1.5 hidden sm:flex">
              {posts.map((_: any, i: number) => (
                <div
                  key={i}
                  className={cn(
                    "h-1 transition-all duration-500 rounded-full",
                    currentSlide === i ? "w-6 bg-primary" : "w-1.5 bg-foreground/20 dark:bg-white/40"
                  )}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

/* ── Card 2: Stats Monitor ── */
function StatsVisual({ categoryStats }: { categoryStats: { name: string, count: number }[] }) {
  const totalArticles = categoryStats.reduce((total, category) => total + category.count, 0);

  return (
    <div className="flex h-full w-full flex-col gap-7 p-5">
      <div className="grid grid-cols-2 gap-3">
        {[
          { label: 'Published articles', value: totalArticles },
          { label: 'Categories', value: categoryStats.length },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-border bg-background/70 p-4">
            <p className="text-sm leading-snug text-muted-foreground">{stat.label}</p>
            <p className="mt-3 text-3xl font-semibold tracking-tight text-foreground">{stat.value}</p>
          </div>
        ))}
      </div>
      <div className="space-y-4">
        <p className="text-sm font-medium text-foreground">Explore by topic</p>
        {categoryStats.map((category) => (
          <div key={category.name} className="flex items-center justify-between gap-4 border-b border-border/60 pb-3 text-sm">
            <span className="text-muted-foreground">{category.name}</span>
            <span className="font-semibold tabular-nums text-foreground">{category.count} {category.count === 1 ? 'article' : 'articles'}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── Card 3: Activity Feed ── */
const STATUS_ICONS: Record<string, any> = {
  published: { icon: Check, color: "text-emerald-500", bg: "bg-emerald-500/15", gradient: "bg-gradient-to-b from-emerald-400 to-emerald-600", border: "border-emerald-600" },
  recent: { icon: Sparkle, color: "text-amber-400", bg: "bg-amber-400/15", gradient: "bg-gradient-to-b from-amber-400 to-amber-600", border: "border-amber-600" },
};

const getCategoryDesign = (text: string, isActive: boolean, baseGradient: string, baseBorder: string) => {
  const t = text.toLowerCase();
  const sizeClass = isActive ? "w-8 h-8" : "w-5 h-5";
  const iconSize = isActive ? "w-4 h-4" : "w-2.5 h-2.5";

  // AI / Agent: Glassmorphic with subtle inner glow
  if (t.includes('ai') || t.includes('agent') || t.includes('machine learning')) {
    return {
      container: `shrink-0 rounded-[8px] flex items-center justify-center font-bold transition-all duration-300 dark:bg-neutral-950/80 bg-white/80 backdrop-blur-md border dark:border-white/10 border-black/10 shadow-[inset_0_0_12px_rgba(0,0,0,0.05),0_0_8px_rgba(0,0,0,0.05)] dark:shadow-[inset_0_0_12px_rgba(255,255,255,0.05),0_0_8px_rgba(255,255,255,0.05)] relative overflow-hidden ${sizeClass}`,
      icon: `${iconSize} dark:text-neutral-300 text-neutral-700 relative z-10 dark:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]`
    };
  }

  // Software / Code: Minimalist Terminal
  if (t.includes('software') || t.includes('code') || t.includes('dev') || t.includes('engineering')) {
    return {
      container: `shrink-0 rounded-[6px] flex items-center justify-center font-bold transition-all duration-300 dark:bg-neutral-900 bg-neutral-100 border dark:border-neutral-800 border-neutral-200 border-l-[3px] border-l-emerald-500/50 shadow-sm ${sizeClass}`,
      icon: `${iconSize} dark:text-emerald-400/80 text-emerald-600`
    };
  }

  // Architecture / Design: Blueprint Wireframe
  if (t.includes('architecture') || t.includes('design') || t.includes('layout')) {
    return {
      container: `shrink-0 rounded-[8px] flex items-center justify-center font-bold transition-all duration-300 bg-transparent border border-dashed dark:border-neutral-500/40 border-neutral-400/60 shadow-sm ${sizeClass}`,
      icon: `${iconSize} dark:text-neutral-400 text-neutral-600`
    };
  }

  // Data: Layered / Stacked Block
  if (t.includes('data') || t.includes('sql') || t.includes('database')) {
    return {
      container: `shrink-0 rounded-[8px] flex items-center justify-center font-bold transition-all duration-300 dark:bg-neutral-800 bg-neutral-200 border dark:border-neutral-700 border-neutral-300 dark:shadow-[2px_2px_0px_rgba(255,255,255,0.05)] shadow-[2px_2px_0px_rgba(0,0,0,0.1)] ${sizeClass}`,
      icon: `${iconSize} dark:text-amber-400/80 text-amber-600`
    };
  }

  // Web / Cloud: Grid / Dotted background look
  if (t.includes('web') || t.includes('cloud') || t.includes('network')) {
    return {
      container: `shrink-0 rounded-[8px] flex items-center justify-center font-bold transition-all duration-300 dark:bg-neutral-900/50 bg-neutral-100/50 border dark:border-neutral-800/80 border-neutral-200/80 dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:4px_4px] ${sizeClass}`,
      icon: `${iconSize} dark:text-cyan-400/80 text-cyan-600`
    };
  }

  // Default: Sleek Glass Squircle
  return {
    container: `shrink-0 rounded-[8px] flex items-center justify-center font-bold transition-all duration-300 dark:bg-neutral-900/40 bg-neutral-100/40 border dark:border-neutral-800/50 border-neutral-200/50 shadow-inner ${sizeClass}`,
    icon: `${iconSize} dark:text-neutral-400 text-neutral-500`
  };
};

function RecentPublicationsVisual({ blogs }: { blogs: any[] }) {
  const t = useTranslations('blog');
  // Increase to 7 items to fill the taller card space
  const logs = blogs.slice(0, 7).map((b, i) => ({
    category: b.category,
    title: b.title,
    status: i === 0 ? "recent" : "published",
    t: new Date(`${b.date}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' })
  }));

  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % logs.length);
    }, 2400);
    return () => clearInterval(interval);
  }, [logs.length]);

  const getSlot = (i: number) => {
    const N = logs.length;
    let rel = i - activeIdx;
    if (rel > Math.floor(N / 2)) rel -= N;
    if (rel < -Math.floor(N / 2)) rel += N;
    return rel;
  };

  // Evenly distributed steps
  const Y: Record<string, number> = {
    "-3": -165, "-2": -110, "-1": -55,
    "0": 0,
    "1": 55, "2": 110, "3": 165
  };

  return (
    <div className="w-full h-full relative flex items-center justify-center overflow-hidden py-4">
      {logs.map((l, i) => {
        const slot = getSlot(i);
        const si = STATUS_ICONS[l.status] || STATUS_ICONS.published;
        const abs = Math.abs(slot);
        const isActive = slot === 0;
        const isVisible = abs <= 3; // Show 7 items

        const yOffset = Y[String(slot)] ?? (slot < 0 ? -250 : 250);

        // Scale down to prevent touching edges, making it neat
        const scale = isActive ? 1 : abs === 1 ? 0.92 : abs === 2 ? 0.84 : 0.76;
        const opacity = isActive ? 1 : abs === 1 ? 0.75 : abs === 2 ? 0.45 : 0.2;
        const zIndex = isActive ? 40 : 30 - abs * 5;

        return (
          <motion.div
            key={i}
            // Increased horizontal padding so it doesn't hug the walls
            className="absolute left-0 right-0 mx-auto px-4 md:px-8 max-w-[95%]"
            style={{ zIndex }}
            animate={{
              y: isVisible ? yOffset : slot < 0 ? -300 : 300,
              scale,
              opacity: isVisible ? opacity : 0,
            }}
            transition={{
              y: { type: "spring", stiffness: 400, damping: 30 },
              scale: { type: "spring", stiffness: 400, damping: 30 },
              opacity: { duration: 0.3, ease: "easeOut" },
            }}
          >
            <div className={`w-full rounded-2xl border flex items-center gap-3 ${isActive
              ? "px-3.5 py-3 bg-background border-border shadow-[0_8px_30px_rgb(0,0,0,0.12)] dark:shadow-[0_8px_30px_rgb(0,0,0,0.3)]"
              : "px-3 py-2 bg-muted/30 border-border/40"
              }`}>

              {(() => {
                const design = getCategoryDesign(l.category, isActive, "", "");
                const IconComp = getIconForText(l.category);
                return (
                  <div className={design.container}>
                    <IconComp weight="duotone" className={design.icon} />
                  </div>
                );
              })()}

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <span className={`font-mono font-semibold text-foreground leading-none uppercase truncate max-w-[100px] ${isActive ? "text-[11px]" : "text-[10px]"}`}>
                    {t(`categories.${l.category}`)}
                  </span>
                  <span className={`font-mono uppercase tracking-wider rounded px-1.5 py-0.5 ${si.bg} ${si.color} ${isActive ? "text-[8px]" : "text-[7px]"}`}>
                    {l.status}
                  </span>
                </div>
                {isActive && (
                  <p className="text-[10px] text-muted-foreground truncate mt-1 leading-tight">{l.title}</p>
                )}
              </div>

              {isActive && (
                <span className="text-[10px] font-mono text-muted-foreground shrink-0">{l.t}</span>
              )}
            </div>
          </motion.div>
        );
      })}

      <div className="absolute bottom-1 left-0 right-0 flex justify-center gap-1">
        {logs.map((_, i) => (
          <motion.div
            key={i}
            className="rounded-full bg-foreground/25"
            animate={{
              width: i === activeIdx ? 14 : 4,
              opacity: i === activeIdx ? 0.7 : 0.2,
            }}
            style={{ height: 3 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          />
        ))}
      </div>
    </div>
  );
}

/* ── Card 5: Projects Showcase (Animated Stack) ── */
function ProjectsVisual() {
  const topProjects = portfolioData.projects.slice(0, 3);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % topProjects.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [topProjects.length]);

  return (
    <div className="relative w-full h-full flex items-center justify-center overflow-hidden perspective-[1000px]">
      <AnimatePresence mode="popLayout">
        {topProjects.map((p, i) => {
          let offset = i - currentIndex;
          if (offset < 0) offset += topProjects.length;

          const isTop = offset === 0;
          const Icon = getIconForText(p.category || p.title);

          return (
            <motion.div
              key={p.id}
              layout
              animate={{
                opacity: 1 - offset * 0.25,
                y: offset * 40,
                scale: 1 - offset * 0.08,
                zIndex: 10 - offset,
                rotateX: offset * 4
              }}
              transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
              className="absolute w-[85%] h-[180px] top-16 rounded-[16px] border border-white/20 dark:border-white/10 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-xl shadow-xl p-5 flex flex-col justify-between overflow-hidden cursor-pointer group"
              onClick={() => {
                if (isTop) window.location.href = `/projects/${p.slug}`;
                else setCurrentIndex(i);
              }}
            >
              <div className="absolute -right-10 -top-10 w-24 h-24 bg-primary/20 blur-2xl rounded-full group-hover:bg-primary/30 transition-colors duration-500" />

              <div className="flex items-start justify-between relative z-10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-foreground/5 flex items-center justify-center shadow-inner">
                    <Icon weight="duotone" className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col">
                    <h4 className="font-bold text-sm text-foreground tracking-tight leading-none truncate w-[130px]">{p.title}</h4>
                    <span className="text-[10px] text-muted-foreground mt-1.5 font-mono uppercase tracking-widest">{new Date(p.startDate).getFullYear()} • {p.status || "Completed"}</span>
                  </div>
                </div>
                <div className={`p-1.5 rounded-full bg-foreground/5 opacity-0 group-hover:opacity-100 transition-opacity ${!isTop && 'hidden'}`}>
                  <ArrowUpRight weight="bold" className="w-3.5 h-3.5 text-foreground" />
                </div>
              </div>

              <div className="flex items-center gap-1.5 mt-auto relative z-10">
                {p.techStack.slice(0, 3).map((tech: string, idx: number) => (
                  <span key={idx} className="px-2 py-1 text-[8px] font-mono font-semibold rounded-md bg-foreground/5 text-foreground/70 shadow-sm border border-border/20">
                    {tech}
                  </span>
                ))}
                {p.techStack.length > 3 && (
                  <span className="px-2 py-1 text-[8px] font-mono font-semibold rounded-md bg-foreground/5 text-foreground/50 shadow-sm border border-border/20">
                    +{p.techStack.length - 3}
                  </span>
                )}
              </div>
            </motion.div>
          );
        })}
      </AnimatePresence>
    </div>
  );
}

/* ──────────────────────────────────────────────────────
   Main BentoHero Component
────────────────────────────────────────────────────── */

export const BentoHero = ({ isLowPowerMode }: { isLowPowerMode?: boolean }) => {
  const t = useTranslations('blog');
  const { theme } = useTheme();
  const isDark = theme === 'dark';
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const opacity = useTransform(scrollYProgress, [0.2, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0.2, 1], [0, -50]);

  // Mouse Spotlight
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current || isLowPowerMode) return;
    const { left, top } = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  };

  const spotlightBackground = useMotionTemplate`radial-gradient(1000px circle at ${mouseX}px ${mouseY}px, rgba(var(--primary-rgb), ${isDark ? '0.1' : '0.05'}), transparent 80%)`;

  // Data State
  const [currentSlide, setCurrentSlide] = useState(0);
  const featuredPosts = portfolioData.blogs.slice(0, 3);
  const categoryStats = Array.from(new Set(portfolioData.blogs.map(blog => blog.category)))
    .map(cat => ({
      name: t(`categories.${cat}`),
      count: portfolioData.blogs.filter(b => b.category === cat).length
    }));

  const randomGalleryImages = portfolioData.gallery.slice(0, 5).map((item) => item.url);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % featuredPosts.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [featuredPosts.length]);

  const CARDS = [
    {
      title: "Featured Publication",
      description: "Learning journeys and practical reflections on security and infrastructure.",
      visual: <FeaturedVisual posts={featuredPosts} currentSlide={currentSlide} isLowPowerMode={isLowPowerMode} />,
      colSpan: "lg:col-span-2",
      height: "h-[480px]",
    },
    {
      title: "The Gallery",
      description: "Curated milestones of the engineering journey.",
      visual: (
        <div className="p-2 w-full h-full pb-0 rounded-[14px] overflow-visible relative flex items-center justify-center">
          <div className="scale-[1.4] transform-gpu origin-center w-full h-full flex items-center justify-center">
            <AnimatedFolder
              title="The Gallery"
              className="w-full h-full"
              projects={(randomGalleryImages.length > 0
                ? randomGalleryImages
                : portfolioData.gallery
                  .map(item => item.type === 'video' ? item.thumbnail : item.url)
                  .filter((url): url is string => !!url)
                  .slice(0, 5)
              ).map((url, i) => ({
                id: `gallery-img-${i}`,
                image: url,
                title: `Archive 0${i + 1}`
              }))}
            />
          </div>
        </div>
      ),
      colSpan: "lg:col-span-1",
      height: "h-[480px]",
      className: "!overflow-visible hover:z-50",
      innerClassName: "!overflow-visible hover:z-50"
    },
    {
      title: "Publication Stats",
      description: "Current articles and the topics covered in this journal.",
      visual: <StatsVisual categoryStats={categoryStats} />,
      colSpan: "lg:col-span-1",
      height: "h-[420px]",
    },
    {
      title: "Activity Feed",
      description: "The latest stories published in this journal.",
      visual: <RecentPublicationsVisual blogs={portfolioData.blogs} />,
      colSpan: "lg:col-span-1",
      height: "h-[420px]",
    },
    {
      title: "Featured Projects",
      description: "Explore the latest engineered solutions and applications.",
      visual: <ProjectsVisual />,
      colSpan: "lg:col-span-1",
      height: "h-[420px]",
    }
  ];

  return (
    <motion.section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen w-full overflow-hidden flex flex-col bg-transparent"
      style={isLowPowerMode ? { opacity: 1, y: 0 } : { opacity, y }}
    >
      {!isLowPowerMode && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-[1000px] h-[1000px] bg-primary/10 blur-[200px] rounded-full opacity-40 dark:opacity-0 translate-x-1/4 -translate-y-1/4" />
          <div className="absolute bottom-0 left-0 w-[800px] h-[800px] bg-secondary/5 blur-[180px] rounded-full opacity-30 dark:opacity-0 -translate-x-1/4 translate-y-1/4" />
          <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-[0.05] dark:opacity-0 mix-blend-overlay" />
        </div>
      )}

      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-4 md:px-8 lg:px-12 pt-4 pb-20 flex-grow flex flex-col">
        {/* 5-Card Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 w-full mx-auto flex-grow relative z-10">
          {CARDS.map((card, idx) => (
            <FeatCard
              key={idx}
              title={card.title}
              description={card.description}
              className={cn(card.colSpan, card.height, (card as any).className)}
              innerClassName={(card as any).innerClassName}
            >
              {card.visual}
            </FeatCard>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center py-10 border-t border-border/50">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-[10px] md:text-xs font-medium text-muted-foreground/60 max-w-5xl text-center leading-relaxed tracking-wider uppercase"
          >
            A journal of verified learning, technical research, and professional growth in cybersecurity and infrastructure.
            Explore the credentials, the ideas behind them, and what I take into my work. © 2026 Rizwan Syed.
          </motion.p>
        </div>
      </div>

      {!isLowPowerMode && (
        <motion.div
          className="pointer-events-none absolute -inset-px opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0"
          style={{ background: spotlightBackground }}
        />
      )}
    </motion.section>
  );
};
