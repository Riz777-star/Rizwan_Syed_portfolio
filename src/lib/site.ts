import type { Metadata } from 'next';

// Set by the deployment workflow from the active hosting configuration.
// Cloudflare Pages is the primary host; other deployments share its canonicals.
export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://rizwansyed.pages.dev'
).replace(/\/$/, '');

/** Resolve a public URL without discarding a GitHub Pages repository base path. */
export function siteUrl(path = '/'): string {
    if (/^https?:\/\//i.test(path)) return path;
    return `${SITE_URL}/${path.replace(/^\/+/, '')}`;
}

interface PageMetadataOptions {
    title: string;
    description: string;
    path: string;
    image?: string;
    imageAlt?: string;
}

export function createPageMetadata({
    title,
    description,
    path,
    image = '/about/rizwan.jpg',
    imageAlt = 'Rizwan Syed — IT Security Administrator',
}: PageMetadataOptions): Metadata {
    const pageUrl = siteUrl(path);
    const imageUrl = siteUrl(image);
    const socialTitle = `${title} | Rizwan Syed`;

    return {
        title,
        description,
        alternates: { canonical: pageUrl },
        openGraph: {
            type: 'website',
            locale: 'en_US',
            siteName: 'Rizwan Syed',
            url: pageUrl,
            title: socialTitle,
            description,
            images: [{ url: imageUrl, alt: imageAlt }],
        },
        twitter: {
            card: 'summary_large_image',
            title: socialTitle,
            description,
            images: [{ url: imageUrl, alt: imageAlt }],
        },
    };
}
