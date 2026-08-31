import { z } from 'astro/zod';

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  summary: z.string().optional(),
  image: z.string(),
  onHomepage: z.boolean().default(false),
  order: z.number().default(0),
  stack: z.array(z.string()).optional(),
  repository: z.url().optional(),
  linkText: z.string().optional(),
});
