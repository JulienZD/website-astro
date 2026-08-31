import { projectSchema } from '@/schemas/project';
import { glob } from 'astro/loaders';
import { defineCollection } from 'astro:content';

const projectCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/projects' }),
  schema: projectSchema,
});

export const collections = {
  projects: projectCollection,
};
