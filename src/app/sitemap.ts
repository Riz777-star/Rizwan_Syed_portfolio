import type { MetadataRoute } from 'next';
import { portfolioData } from '@/data/portfolio';
import { siteUrl } from '@/lib/site';

// Produce sitemap.xml during static export; no request-time data is needed.
export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const pages = [
        '/',
        '/projects/',
        '/experience/',
        '/skills/',
        '/achievements/',
        '/blog/',
        '/gallery/',
        '/resume/',
        '/contact/',
    ];

    return [
        ...pages.map((path) => ({ url: siteUrl(path) })),
        ...portfolioData.projects.map((project) => ({
            url: siteUrl(`/projects/${project.slug}/`),
        })),
        ...portfolioData.blogs.map((post) => ({
            url: siteUrl(`/blog/${post.slug}/`),
            images: [siteUrl(post.image)],
        })),
    ];
}
