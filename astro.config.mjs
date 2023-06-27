import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import { addBlankTargets } from './src/lib/remark/blank-target';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  markdown: {
    remarkPlugins: [addBlankTargets],
  },
});
