import { getCollection, type CollectionEntry } from 'astro:content';

export type ProjectEntry = CollectionEntry<'projects'>;

/** Projects in the order they should be displayed on the site. */
export const getSortedProjects = async (
  filter?: (entry: ProjectEntry) => boolean
): Promise<readonly ProjectEntry[]> => {
  const projects = await getCollection('projects', filter);

  return projects.toSorted((a, b) => a.data.order - b.data.order);
};
