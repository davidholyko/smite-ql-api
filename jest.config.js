const config = {
  verbose: true,

  collectCoverageFrom: ['**/*.{js}', '!**/node_modules/**'],

  globalSetup: './test/jestGlobalSetup.js',

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },
};

module.exports = config;
