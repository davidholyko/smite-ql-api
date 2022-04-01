const config = {
  collectCoverageFrom: ['**/*.{js}', '!**/node_modules/**'],

  coverageThreshold: {
    global: {
      branches: 80,
      functions: 80,
      lines: 80,
      statements: -10,
    },
  },

  globalSetup: './test/jestGlobalSetup.js',

  setupFiles: ['./test/setup.js'],

  verbose: true,
};

module.exports = config;
