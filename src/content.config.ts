import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const pageSchema = z.object({
  title: z.string(),
  description: z.string().default(''),
  type: z.string(),
  url: z.string(),
  legacy_url: z.string().optional(),
  canonical_url: z.string().optional(),
  published_at: z.union([z.string(), z.date()]).optional(),
  updated_at: z.union([z.string(), z.date()]).optional(),
  author: z.string().default(''),
  author_slug: z.string().default(''),
  tags: z.array(z.string()).default([]),
  tag_slugs: z.array(z.string()).default([]),
  image: z.string().default(''),
  listicle_apps: z.array(z.string()).default([]),
});

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/*.md' }),
  schema: pageSchema,
});

const marketing = defineCollection({
  loader: glob({ base: './src/content/marketing', pattern: '**/*.md' }),
  schema: pageSchema,
});

const pseo = defineCollection({
  loader: glob({ base: './src/content/pseo', pattern: '**/*.md' }),
  schema: pageSchema,
});

export const collections = { blog, marketing, pseo };
