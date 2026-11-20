import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost } from '@/types';
import { cn } from '@/lib/utils';
import { useTranslations } from 'next-intl';

interface BlogCardProps {
    post: BlogPost;
    index: number;
    isHovered?: boolean;
    isLowPowerMode?: boolean;
}

export function BlogCard({ post, index, isHovered, isLowPowerMode }: BlogCardProps) {
    const t = useTranslations('blog');

    if (post.category === 'certifications') {
        return (
            <Link
                href={`/blog/${post.slug}`}
                className="group block h-full overflow-hidden rounded-2xl border border-border bg-background transition-colors hover:border-primary/50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
            >
                <div className="relative aspect-[16/9] overflow-hidden bg-secondary/10">
                    <Image src={post.image} alt={post.imageAlt || post.title} fill sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" />
                </div>
                <div className="p-5 sm:p-6">
                    <p className="mb-3 text-sm font-medium text-primary">{t('categories.certifications')}</p>
                    <h3 className="text-xl font-semibold leading-snug tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-2xl">{post.title}</h3>
                    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{post.excerpt}</p>
                    <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4 text-sm text-muted-foreground">
                        <time dateTime={post.date}>{new Date(`${post.date}T00:00:00Z`).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC' })}</time>
                        <span>{post.readTime} {t('readTime')}</span>
                    </div>
                </div>
            </Link>
        );
    }

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="block h-full cursor-none outline-none"
            data-blog-id={post.id}
        >
            <motion.div
                initial={isLowPowerMode ? { opacity: 0 } : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: isLowPowerMode ? 0 : index * 0.1 }}
                className={cn(
                    "relative aspect-[16/9] w-full bg-background rounded-none overflow-hidden border border-foreground/10 dark:border-white/5 transition-all duration-500 shadow-xl",
                    isHovered ? "border-primary/40 shadow-2xl scale-[1.01]" : "border-foreground/10"
                )}
            >
                {/* Immersive Background Image */}
                <Image
                    src={post.image}
                    alt={post.imageAlt || post.title}
                    fill
                    className={cn(
                        "object-cover transition-transform duration-1000",
                        isHovered ? "scale-105" : "scale-100"
                    )}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Permanent Gradient Overlay for Legibility */}
                <div className={cn(
                    "absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent transition-opacity duration-700",
                    isHovered ? "opacity-100" : "opacity-90"
                )} />

                {/* Integrated Content Overlay */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8">
                    {/* Title (Always visible, clean, first in order) */}
                    <h3 className={cn(
                        "text-2xl lg:text-3xl font-black text-white transition-all leading-[1.1] tracking-tighter drop-shadow-lg",
                        isHovered ? "translate-y-0" : "translate-y-2"
                    )}>
                        {post.title}
                    </h3>

                    {/* The Reveal Section (Appears BELOW the title) */}
                    <div className={cn(
                        "transition-all duration-700 ease-in-out overflow-hidden space-y-4",
                        isHovered ? "max-h-[200px] opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
                    )}>
                        <p className="text-xs text-white/80 line-clamp-3 leading-relaxed font-medium">
                            {post.excerpt}
                        </p>
                        <div className="flex items-center justify-between border-t border-white/10 pt-4">
                            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white bg-white/10 backdrop-blur-md px-3 py-1 rounded-none border border-white/10">
                                {t(`categories.${post.category}`)}
                            </span>
                            <span className="text-[10px] font-bold text-white/60 uppercase tracking-widest">
                                {new Date(post.date).toLocaleDateString('id-ID', { day: '2-digit', month: 'long', year: 'numeric' })}
                            </span>
                        </div>
                    </div>
                </div>
            </motion.div>
        </Link>
    );
}

