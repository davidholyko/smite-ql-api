const config = {
  collectCoverage: true,

  coverageReporters: ['json', 'html'],

  globalSetup: './test/setupGlobals.js',

  setupFiles: ['./test/setup.js'],

  verbose: true,
};

module.exports = config;
