/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
  tabWidth: 2,
  semi: true,
  useTabs: false,
  jsxSingleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
