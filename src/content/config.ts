// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    tagline: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()), 
    draft: z.boolean().default(true),
    slug: z.string()
  }),
});

export const collections = { blog };