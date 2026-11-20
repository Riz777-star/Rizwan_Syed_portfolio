// Set by the deployment workflow from the active GitHub Pages configuration.
// Keep the working Pages URL until a custom domain is actually configured.
export const SITE_URL = (
    process.env.NEXT_PUBLIC_SITE_URL || 'https://riz777-star.github.io/Rizwan_Syed_portfolio'
).replace(/\/$/, '');

/** Resolve a public URL without discarding a GitHub Pages repository base path. */
export function siteUrl(path = '/'): string {
    if (/^https?:\/\//i.test(path)) return path;
    return `${SITE_URL}/${path.replace(/^\/+/, '')}`;
}
