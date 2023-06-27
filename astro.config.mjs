import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';
import image from '@astrojs/image';
import { addBlankTargets } from './src/lib/remark/blank-target';

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp',
    }),
  ],
  markdown: {
    remarkPlugins: [addBlankTargets],
  },
});
