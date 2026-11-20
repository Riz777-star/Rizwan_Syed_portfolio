import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import { portfolioData } from '@/data/portfolio';
import { siteUrl } from '@/lib/site';

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const post = portfolioData.blogs.find((item) => item.slug === slug);
    if (!post) return { title: 'Article not found' };

    const image = siteUrl(post.image);
    const articleUrl = siteUrl(`/blog/${post.slug}/`);
    return {
        title: post.title,
        description: post.excerpt,
        keywords: post.tags,
        authors: [{ name: post.author.name }],
        alternates: { canonical: articleUrl },
        openGraph: {
            type: 'article',
            url: articleUrl,
            title: post.title,
            description: post.excerpt,
            publishedTime: `${post.date}T00:00:00Z`,
            authors: [post.author.name],
            tags: post.tags,
            images: [{ url: image, alt: post.imageAlt || post.title }],
        },
        twitter: {
            card: 'summary_large_image',
            title: post.title,
            description: post.excerpt,
            images: [image],
        },
    };
}

export function generateStaticParams() {
    return portfolioData.blogs.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostLayout({ children }: { children: ReactNode }) {
    return children;
}
