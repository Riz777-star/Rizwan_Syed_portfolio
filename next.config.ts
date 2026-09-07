import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const basePath = isGitHubPages ? '/Rizwan_Syed_portfolio' : '';

const nextConfig: NextConfig = {
    reactStrictMode: true,
    output: isGitHubPages ? 'export' : undefined,
    basePath,
    assetPrefix: basePath,
    trailingSlash: isGitHubPages,
    transpilePackages: ['three'],
    images: {
        unoptimized: isGitHubPages,
        remotePatterns: [
            { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
            { protocol: 'https', hostname: 'images.unsplash.com' },
            { protocol: 'https', hostname: 'assets.aceternity.com' }
        ],
        formats: ['image/avif', 'image/webp'],
    },
};

export default withNextIntl(nextConfig);
