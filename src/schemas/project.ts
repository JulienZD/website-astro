import { z } from 'astro:content';

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  summary: z.string().optional(),
  image: z.string(),
  onHomepage: z.boolean().default(false),
  order: z.number().default(0),
  stack: z.array(z.string()).optional(),
  repository: z.string().url().optional(),
  linkText: z.string().optional(),
});

export type Project = z.infer<typeof projectSchema>;
