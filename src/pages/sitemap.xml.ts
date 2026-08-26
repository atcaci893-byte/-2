import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

const staticRoutes = [
  '/', '/bonus/', '/promokod/', '/registration/', '/app/', '/payments/',
  '/verification/', '/support/', '/security/', '/responsible-gambling/', '/news/',
];

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('news', ({ data }) => !data.draft);
  const routes = [
    ...staticRoutes.map((route) => ({ route })),
    ...posts.map((post) => ({ route: `/news/${post.id}/`, lastmod: post.data.updatedAt.toISOString().slice(0, 10) })),
  ];
  const urls = routes.map(({ route, lastmod }) => `  <url>\n    <loc>${new URL(route, site).href}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ''}\n  </url>`).join('\n');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};

