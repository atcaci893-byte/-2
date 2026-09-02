import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const news = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/news' }),
  schema: z.object({
    title: z.string(),
    seoTitle: z.string().optional(),
    description: z.string(),
    category: z.string(),
    publishedAt: z.coerce.date(),
    updatedAt: z.coerce.date(),
    imageAlt: z.string(),
    image: z.string(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { news };
