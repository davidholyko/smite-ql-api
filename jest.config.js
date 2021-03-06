const config = {
  collectCoverage: true,

  coverageReporters: ['json-summary', 'json', 'html'],

  globalSetup: './test/setup/setupGlobals.js',

  setupFiles: ['./test/setup/setup.js'],

  setupFilesAfterEnv: ['./test/setup/setupRedisMock.js'],

  // extend test timeout for integration tests
  // if Smite API is not responsive
  testTimeout: 30000,

  verbose: true,
};

module.exports = config;
