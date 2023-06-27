import type { Parent } from 'unist';

/**
 * Set target="_blank" on external links
 */
export function addBlankTargets(): (tree: Parent) => void {
  return function _addBlankTargets(tree: Parent): void {
    tree.children.forEach((node) => {
      if (node.type === 'link') {
        node.data = {
          ...(node.data ?? {}),
          hProperties: {
            ...((node.data?.hProperties as Record<string, unknown>) ?? {}),
            target: '_blank',
          },
        };
      }

      if ('children' in node) {
        _addBlankTargets(node as Parent);
      }
    });
  };
}
