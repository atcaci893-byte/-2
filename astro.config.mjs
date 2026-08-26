import { defineConfig } from 'astro/config';

const vercelProductionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = process.env.SITE_URL
  ?? (vercelProductionHost ? `https://${vercelProductionHost}` : 'https://pokerbet-ua.example');

export default defineConfig({
  site,
  output: 'static',
  trailingSlash: 'always',
  compressHTML: true,
});
