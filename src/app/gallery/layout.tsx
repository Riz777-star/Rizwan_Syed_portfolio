import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
    title: 'Gallery',
    description: "Photos and milestones from Rizwan Syed's education, professional work, and personal journey.",
    path: '/gallery/',
});

export default function GalleryLayout({ children }: { children: ReactNode }) {
    return children;
}
