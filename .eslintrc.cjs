module.exports = {
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'prettier'
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['vue', 'prettier', 'simple-import-sort'],
  rules: {
    "no-undef": "off",
    "simple-import-sort/imports": "error"
  }
}
