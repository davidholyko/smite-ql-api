const config = {
  collectCoverage: true,

  coverageReporters: ['json', 'html'],

  globalSetup: './test/setup/setupGlobals.js',

  setupFiles: ['./test/setup/setup.js'],

  setupFilesAfterEnv: ['./test/setup/setupFilesAfterEnv.js'],

  verbose: true,
};

module.exports = config;
