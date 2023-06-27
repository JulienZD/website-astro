import { projectSchema } from '@/schemas/project';
import { defineCollection } from 'astro:content';

const storyCollection = defineCollection({
  type: 'content',
  schema: projectSchema,
});

export const collections = {
  projects: storyCollection,
};
