import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
    title: 'Blog',
    description: 'Technical articles and learning stories about cybersecurity, networking, and professional development by Rizwan Syed.',
    path: '/blog/',
});

export default function BlogLayout({ children }: { children: ReactNode }) {
    return children;
}
