import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
    title: 'Experience',
    description: "Rizwan Syed's professional experience and education across enterprise IT, cybersecurity, networking, and infrastructure.",
    path: '/experience/',
});

export default function ExperienceLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
