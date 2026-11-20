import type { ReactNode } from 'react';
import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
    title: 'Resume',
    description: "Rizwan Syed's resume, including IT security experience, education, technical skills, and certifications.",
    path: '/resume/',
});

export default function ResumeLayout({ children }: { children: ReactNode }) {
    return children;
}
