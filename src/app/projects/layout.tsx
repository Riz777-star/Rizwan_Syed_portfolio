import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
    title: 'Projects',
    description: "Explore Rizwan Syed's cybersecurity and infrastructure projects, including identity, threat analysis, backup, and recovery systems.",
    path: '/projects/',
});

export default function ProjectsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
