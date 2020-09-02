module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    useJSXTextNode: true,
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    node: true,
    jest: true,
  },
  extends: [
    'airbnb-typescript/base',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint'],
  rules: {
    '@typescript-eslint/ban-ts-ignore': 0,
    '@typescript-eslint/ban-ts-comment': 0,
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'es5',
        printWidth: 100,
      },
    ],
    'import/extensions': [
      'error',
      'always',
      {
        js: 'never',
        mjs: 'never',
        ts: 'never',
      },
    ],
    'global-require': 0,
  },
  settings: {
    'import/core-modules': ['vue', '@nuxt/types', '<%= options.shopifyPath %>'],
    'import/resolver': {
      node: { extensions: ['.js', '.mjs'] },
    },
  },
};
