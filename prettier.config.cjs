// prettier.config.cjs
module.exports = {
  plugins: [require('@trivago/prettier-plugin-sort-imports')],
  singleQuote: true,
  tabWidth: 2,
  semi: false,
  jsxSingleQuote: true,
  arrowParens: 'always',
  importOrder: ["<THIRD_PARTY_MODULES>","^@/(.*)$", "^[../]", "^[./]"],
}
