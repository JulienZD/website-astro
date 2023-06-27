import { remark } from 'remark';
import html from 'remark-html';
import { addBlankTargets } from './blank-target';

export const renderMarkdownToHtml = async (
  markdown: string
): Promise<string> => {
  const result = await remark()
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    .use(html)
    .use(addBlankTargets)
    .process(markdown);

  return result.toString();
};
