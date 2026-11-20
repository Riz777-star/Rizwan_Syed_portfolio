import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const isStaticExport = isGitHubPages || process.env.CF_PAGES === '1' || process.env.STATIC_EXPORT === 'true';
// A custom domain serves the same export at the origin root. Preserve an
// explicitly empty base path from actions/configure-pages in that case.
const basePath = isGitHubPages
    ? (process.env.NEXT_PUBLIC_BASE_PATH ?? '/Rizwan_Syed_portfolio')
    : '';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: isStaticExport ? 'export' : undefined,
    basePath,
    assetPrefix: basePath,
    trailingSlash: isStaticExport,
    transpilePackages: ['three'],
    images: {
        unoptimized: isStaticExport,
        remotePatterns: [
            { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'assets.aceternity.com' }
        ],
        formats: ['image/avif', 'image/webp'],
    },
};

export default withNextIntl(nextConfig);
