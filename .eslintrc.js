module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['sort-class-members'],
  rules: {
    'valid-jsdoc': 'error',

    'sort-class-members/sort-class-members': [
      2,
      {
        order: [
          'constructor',
          '[properties]',
          '[conventional-private-properties]',
          '[conventional-private-methods]',
          '[static-properties]',
          '[static-methods]',
          '[methods]',
        ],
        accessorPairPositioning: 'getThenSet',
      },
    ],
  },
};
