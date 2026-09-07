import { readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/Rizwan_Syed_portfolio';
const outputDir = path.resolve('out');
const textExtensions = new Set(['.html', '.js', '.css', '.json', '.txt', '.xml']);
const assetDirectories = [
    'about',
    'blog',
    'certificate',
    'certificates',
    'feature',
    'gallery',
    'journey',
    'lanyard',
    'logos',
    'project',
    'skills',
];
const rootAssets = [
    'Arfazrll_dark.svg',
    'Arfazrll_light.svg',
    'RS_dark.svg',
    'RS_light.svg',
    'favicon.svg',
    'grid.svg',
    'mask.svg',
    'noise.svg',
    'resume.pdf',
];

const escapedBasePath = basePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
const directoriesPattern = assetDirectories.join('|');
const rootAssetsPattern = rootAssets
    .map((asset) => asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
    .join('|');
const assetPattern = new RegExp(
    `(?<!${escapedBasePath})/(?:${directoriesPattern})(?=/)|(?<!${escapedBasePath})/(?:${rootAssetsPattern})(?=[?"'\\s)\\\\]|$)`,
    'g'
);

async function processDirectory(directory) {
    const entries = await readdir(directory, { withFileTypes: true });

    await Promise.all(
        entries.map(async (entry) => {
            const entryPath = path.join(directory, entry.name);

            if (entry.isDirectory()) {
                await processDirectory(entryPath);
                return;
            }

            if (!textExtensions.has(path.extname(entry.name))) return;

            const original = await readFile(entryPath, 'utf8');
            const updated = original.replace(assetPattern, (assetPath) => `${basePath}${assetPath}`);

            if (updated !== original) {
                await writeFile(entryPath, updated);
            }
        })
    );
}

await processDirectory(outputDir);
await writeFile(path.join(outputDir, '.nojekyll'), '');

console.log(`Prefixed static assets with ${basePath}`);
