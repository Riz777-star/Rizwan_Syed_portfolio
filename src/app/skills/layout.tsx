import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
    title: 'Skills',
    description: "Rizwan Syed's technical skills across cybersecurity, networking, systems administration, cloud infrastructure, and automation.",
    path: '/skills/',
});

export default function SkillsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
