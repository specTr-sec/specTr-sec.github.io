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
    category: z.enum(['projects', 'articles', 'write-ups']),
    // ,slug: z.string()
  }),
});

export const collections = { blog };