/**
 * Prettier only handles `.astro` files here; oxfmt owns everything else.
 * @type {import('prettier').Config}
 */
export default {
  plugins: ['prettier-plugin-astro', 'prettier-plugin-tailwindcss'],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  useTabs: false,
  trailingComma: 'es5',
  endOfLine: 'lf',
  arrowParens: 'always',
  bracketSpacing: true,
  tailwindStylesheet: './src/styles/global.css',
};
