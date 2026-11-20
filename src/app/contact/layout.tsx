import { createPageMetadata } from '@/lib/site';

export const metadata = createPageMetadata({
    title: 'Contact',
    description: 'Contact Rizwan Syed about cybersecurity, infrastructure, automation, and collaboration opportunities.',
    path: '/contact/',
});

export default function ContactLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return children;
}
