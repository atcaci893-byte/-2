import { defineConfig } from 'astro/config';

const FALLBACK_SITE_URL = 'https://pokerbet-2.vercel.app';

function normalizeSiteUrl(value) {
  if (typeof value !== 'string' || value.trim() === '') return undefined;

  const rawUrl = value.trim();
  const absoluteUrl = /^https?:\/\//i.test(rawUrl) ? rawUrl : `https://${rawUrl}`;

  try {
    const url = new URL(absoluteUrl);
    if (url.protocol !== 'http:' && url.protocol !== 'https:') return undefined;
    return url.origin;
  } catch {
    return undefined;
  }
}

const site = normalizeSiteUrl(process.env.SITE_URL)
  ?? normalizeSiteUrl(process.env.VERCEL_PROJECT_PRODUCTION_URL)
  ?? FALLBACK_SITE_URL;

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
});
