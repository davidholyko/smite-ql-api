import { jest } from '@jest/globals';

jest.mock('../../src/globals', () => {
  return {
    patch_version: '10.0',
  };
});

module.exports = {};
