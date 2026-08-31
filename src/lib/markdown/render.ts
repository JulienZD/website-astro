import { createSatteriMarkdownProcessor } from '@astrojs/markdown-satteri';
import { blankTargets } from './blank-targets';

/**
 * Standalone renderer for Markdown held in frontmatter (rather than in a file
 * body, which Astro renders itself). Mirrors the site's Markdown pipeline.
 */
const processor = await createSatteriMarkdownProcessor({
  hastPlugins: [blankTargets],
  syntaxHighlight: false,
});

export const renderMarkdownToHtml = async (
  markdown: string
): Promise<string> => {
  const { code } = await processor.render(markdown);

  return code;
};
