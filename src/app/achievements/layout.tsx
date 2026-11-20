import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
    title: 'Achievements',
    description: 'Professional certifications, Coursera learning achievements, and research publications from Rizwan Syed.',
    path: '/achievements/',
});

export default function AchievementsLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
