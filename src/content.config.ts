import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    description: z.string(),
    category: z.enum(['major', 'library', 'iot', 'data']),
    tags: z.array(z.string()),
    github: z.string().url().optional(),
    cratesio: z.string().url().optional(),
    stars: z.number().optional(),
    forks: z.number().optional(),
    comingSoon: z.boolean().default(false),
    label: z.string().optional(),
    order: z.number().default(99),
  }),
});

export const collections = { projects };
