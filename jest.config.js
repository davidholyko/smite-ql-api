const config = {
  collectCoverage: true,

  coverageReporters: ['json', 'html'],

  coverageThreshold: {
    // TODO: This global coverage does not account for automation tests
    // and when we run npm run tests:unit this only accounts for
    // tests that do not make real API calls
    global: {
      statements: 39,
      branches: 20,
      lines: 40,
      functions: 32,
    },
  },

  globalSetup: './test/jestGlobalSetup.js',

  setupFiles: ['./test/setup.js'],

  verbose: true,
};

module.exports = config;
