import { satteri } from '@astrojs/markdown-satteri';
import tailwindcss from '@tailwindcss/vite';
import { defineConfig } from 'astro/config';
import { blankTargets } from './src/lib/markdown/blank-targets';

// https://astro.build/config
export default defineConfig({
  markdown: {
    processor: satteri({
      hastPlugins: [blankTargets],
    }),
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
