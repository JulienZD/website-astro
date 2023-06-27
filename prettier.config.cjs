/* global module, require */
/** @type {import('prettier').Config} */
module.exports = {
  plugins: [
    require.resolve('prettier-plugin-astro'),
    require.resolve('prettier-plugin-tailwindcss'),
  ],
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
};
