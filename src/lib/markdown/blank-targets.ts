import { defineHastPlugin } from 'satteri';

/**
 * Set target="_blank" on links rendered from Markdown. Every link in the
 * content collection points off-site, so this applies to all of them.
 */
export const blankTargets = defineHastPlugin({
  name: 'blank-targets',
  element: {
    filter: ['a'],
    visit(node, ctx) {
      ctx.setProperty(node, 'target', '_blank');
    },
  },
});
