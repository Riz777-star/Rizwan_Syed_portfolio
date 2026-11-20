'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Award, BookOpen, Check, Clock, Copy, Download, ExternalLink } from 'lucide-react';
import type { Achievement, BlogPost } from '@/types';
import { courseraBlogPosts, type CertificationStory } from '@/data/coursera-certifications';

interface CertificationStoryArticleProps {
    post: BlogPost;
    story: CertificationStory;
    achievement: Achievement;
}

function formatDate(date: string) {
    return new Date(`${date}T00:00:00Z`).toLocaleDateString('en-US', {
        month: 'long', day: 'numeric', year: 'numeric', timeZone: 'UTC',
    });
}

export function CertificationStoryArticle({ post, story, achievement }: CertificationStoryArticleProps) {
    const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'unavailable'>('idle');
    const isSpecialization = achievement.type?.toLowerCase().includes('specialization');
    const credentialType = isSpecialization ? 'Specialization certificate' : 'Course certificate';
    const relatedPosts = courseraBlogPosts.filter((item) => item.slug !== post.slug).slice(0, 2);

    async function copyLink() {
        try {
            await navigator.clipboard.writeText(window.location.href);
            setCopyStatus('copied');
        } catch {
            setCopyStatus('unavailable');
        }
    }

    return (
        <main className="min-h-screen bg-background pb-20 pt-28 sm:pt-36">
            <article className="mx-auto max-w-6xl px-5 sm:px-8">
                <nav aria-label="Article navigation" className="mb-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm font-medium text-muted-foreground">
                    <Link href="/blog" className="inline-flex items-center gap-2 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                        <BookOpen aria-hidden="true" className="h-4 w-4" /> All stories
                    </Link>
                    <Link href="/achievements" className="inline-flex items-center gap-2 hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                        <Award aria-hidden="true" className="h-4 w-4" /> Achievements
                    </Link>
                </nav>

                <header className="border-b border-border pb-10 sm:pb-14">
                    <div className="mb-5 flex flex-wrap items-center gap-3 text-sm font-medium">
                        <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-primary">Learning journal</span>
                        <span className="text-muted-foreground">Security, infrastructure &amp; professional growth</span>
                    </div>
                    <h1 className="max-w-4xl text-3xl font-bold leading-[1.12] tracking-tight text-foreground sm:text-5xl lg:text-6xl">{post.title}</h1>
                    <p className="mt-6 max-w-3xl text-lg leading-relaxed text-muted-foreground sm:text-xl">{post.excerpt}</p>
                    <div className="mt-8 flex flex-wrap items-center justify-between gap-5">
                        <div className="flex items-center gap-3">
                            <Image src={post.author.avatar} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />
                            <div>
                                <p className="text-sm font-semibold text-foreground">{post.author.name}</p>
                                <p className="mt-1 text-sm text-muted-foreground">
                                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                                    <span aria-hidden="true" className="mx-2">·</span>
                                    <span className="inline-flex items-center gap-1"><Clock aria-hidden="true" className="h-3.5 w-3.5" />{post.readTime} min read</span>
                                </p>
                            </div>
                        </div>
                        <div className="flex flex-col items-start gap-2">
                            <button type="button" onClick={copyLink} className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2.5 text-sm font-medium transition-colors hover:bg-secondary/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                                {copyStatus === 'copied' ? <Check aria-hidden="true" className="h-4 w-4" /> : <Copy aria-hidden="true" className="h-4 w-4" />}
                                {copyStatus === 'copied' ? 'Link copied' : 'Copy article link'}
                            </button>
                            <span role="status" className="text-sm text-muted-foreground">{copyStatus === 'unavailable' ? 'You can copy the address from your browser.' : ''}</span>
                        </div>
                    </div>
                    <div className="relative mt-10 aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-secondary/10">
                        <Image src={post.image} alt="" fill sizes="(max-width: 1200px) 100vw, 1152px" className="object-cover" preload />
                    </div>
                </header>

                <div className="grid gap-12 py-10 sm:py-14 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-16">
                    <div className="min-w-0 max-w-3xl">
                        <p className="border-l-2 border-primary pl-5 text-xl leading-relaxed text-foreground sm:pl-6">{story.introduction}</p>
                        <div className="mt-10 space-y-10">
                            {story.sections.map((section) => (
                                <section key={section.id} id={section.id} className="scroll-mt-28">
                                    <h2 className="mb-5 text-2xl font-semibold leading-snug tracking-tight text-foreground sm:text-3xl">{section.heading}</h2>
                                    <div className="space-y-5 text-base leading-[1.85] text-muted-foreground sm:text-lg">
                                        {section.paragraphs.map((paragraph, index) => <p key={`${section.id}-${index}`}>{paragraph}</p>)}
                                    </div>
                                </section>
                            ))}
                        </div>
                        <section aria-labelledby="story-takeaway" className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-6 sm:p-8">
                            <h2 id="story-takeaway" className="mb-3 text-sm font-semibold uppercase tracking-wider text-primary">What I take forward</h2>
                            <p className="text-lg font-medium leading-relaxed text-foreground">{story.takeaway}</p>
                        </section>
                        <div className="mt-8 flex flex-wrap gap-2" aria-label="Article topics">
                            {post.tags.map((tag) => <Link key={tag} href={`/blog?q=${encodeURIComponent(tag)}`} className="rounded-full border border-border px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground">{tag}</Link>)}
                        </div>
                    </div>

                    <aside className="hidden lg:block" aria-label="Article contents">
                        <div className="sticky top-28 border-l border-border pl-6">
                            <p className="mb-5 text-sm font-semibold text-foreground">In this story</p>
                            <nav>
                                <ul className="space-y-4">
                                    {story.sections.map((section) => <li key={section.id}><a href={`#${section.id}`} className="text-sm leading-relaxed text-muted-foreground transition-colors hover:text-primary">{section.heading}</a></li>)}
                                    <li><a href="#credential" className="text-sm font-medium text-primary">The credential</a></li>
                                </ul>
                            </nav>
                            <div className="mt-8 border-t border-border pt-6">
                                <p className="text-sm leading-relaxed text-muted-foreground">Part of my continuing work to connect practical IT experience with deeper technical understanding.</p>
                            </div>
                        </div>
                    </aside>
                </div>

                <section id="credential" aria-labelledby="credential-heading" className="scroll-mt-28 overflow-hidden rounded-2xl border border-border bg-secondary/5">
                    <div className="grid md:grid-cols-[1.1fr_1fr]">
                        <div className="flex items-center justify-center border-b border-border bg-white p-4 sm:p-6 md:border-b-0 md:border-r">
                            {achievement.image && <Image src={achievement.image} alt={`${credentialType} issued to Rizwan Syed for ${achievement.title}`} width={1772} height={928} sizes="(max-width: 768px) 100vw, 600px" className="h-auto w-full object-contain" />}
                        </div>
                        <div className="p-6 sm:p-8">
                            <p className="mb-3 text-sm font-medium text-primary">{credentialType}</p>
                            <h2 id="credential-heading" className="text-xl font-semibold leading-snug tracking-tight sm:text-2xl">{achievement.title}</h2>
                            <dl className="mt-6 space-y-3 text-sm">
                                <div><dt className="text-muted-foreground">Issued by</dt><dd className="mt-1 font-medium text-foreground">{achievement.issuer}</dd></div>
                                <div><dt className="text-muted-foreground">Completed</dt><dd className="mt-1 font-medium text-foreground"><time dateTime={achievement.date}>{formatDate(achievement.date)}</time></dd></div>
                                <div><dt className="text-muted-foreground">Credential ID</dt><dd className="mt-1 break-all font-mono text-foreground">{story.credentialId}</dd></div>
                            </dl>
                            {achievement.description && <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{achievement.description}</p>}
                            <div className="mt-6 flex flex-wrap gap-3">
                                {achievement.credentialUrl && <a href={achievement.credentialUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-lg bg-foreground px-4 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-80">Verify on Coursera <ExternalLink aria-hidden="true" className="h-4 w-4" /></a>}
                                {achievement.downloadUrl && <a href={achievement.downloadUrl} download className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-3 text-sm font-medium transition-colors hover:bg-secondary/30"><Download aria-hidden="true" className="h-4 w-4" /> Download certificate</a>}
                            </div>
                        </div>
                    </div>
                </section>

                <section aria-labelledby="source-heading" className="mt-8 border-b border-border pb-10">
                    <h2 id="source-heading" className="text-sm font-semibold text-foreground">Explore the learning behind this story</h2>
                    <ul className="mt-3 flex flex-wrap gap-x-6 gap-y-3">
                        {story.resources.map((resource) => <li key={resource.url}><a href={resource.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm leading-relaxed text-muted-foreground underline decoration-border underline-offset-4 hover:text-primary">{resource.label}<ExternalLink aria-hidden="true" className="h-3.5 w-3.5 shrink-0" /></a></li>)}
                    </ul>
                </section>

                <section aria-labelledby="related-heading" className="pt-12 sm:pt-16">
                    <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
                        <h2 id="related-heading" className="text-2xl font-semibold tracking-tight">Continue the journey</h2>
                        <Link href="/blog" className="text-sm font-medium text-primary hover:underline">View all stories</Link>
                    </div>
                    <div className="grid gap-6 sm:grid-cols-2">
                        {relatedPosts.map((related) => (
                            <Link key={related.slug} href={`/blog/${related.slug}`} className="group overflow-hidden rounded-2xl border border-border transition-colors hover:border-primary/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary">
                                <div className="relative aspect-[16/9] overflow-hidden bg-secondary/10"><Image src={related.image} alt="" fill sizes="(max-width: 640px) 100vw, 560px" className="object-cover transition-transform duration-500 group-hover:scale-105" /></div>
                                <div className="p-5 sm:p-6"><p className="mb-3 text-sm text-muted-foreground">Learning journal · {related.readTime} min read</p><h3 className="text-xl font-semibold leading-snug group-hover:text-primary">{related.title}</h3><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{related.excerpt}</p></div>
                            </Link>
                        ))}
                    </div>
                </section>
            </article>
        </main>
    );
}
