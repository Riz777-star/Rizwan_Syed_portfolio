import type { ReactNode } from 'react';
import { portfolioData } from '@/data/portfolio';

export function generateStaticParams() {
    return portfolioData.blogs.map((post) => ({
        slug: post.slug,
    }));
}

export default function BlogPostLayout({ children }: { children: ReactNode }) {
    return children;
}
