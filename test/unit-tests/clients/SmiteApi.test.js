import moment from 'moment';

import { smiteApiClient, SmiteApi } from '../../../src/clients/SmiteApi';

describe('SmiteApi', () => {
  beforeEach(() => {
    smiteApiClient.session_id = null;
    smiteApiClient.dev_id = '0110';
    smiteApiClient.auth_key = 'ABC123ABC123ABC123ABC123ABC12345';
  });

  describe('constructor', () => {
    it('should be an instance of class "SmiteApi"', async () => {
      expect(smiteApiClient).toBeInstanceOf(SmiteApi);
    });
  });

  describe('_assertEnvVariables', () => {
    beforeEach(() => {
      smiteApiClient.session_id = null;
      smiteApiClient.dev_id = null;
      smiteApiClient.auth_key = null;
    });

    it('should throw error if dev_id is undefined', () => {
      smiteApiClient.auth_key = '1234';
      const error = 'DEV_ID cannot be undefined. Please update top level .env file.';
      const fn = () => smiteApiClient._assertEnvVariables();
      expect(fn).toThrow(error);
    });
    it('should throw error if auth_key is undefined', () => {
      smiteApiClient.dev_id = '1234';
      const error = 'AUTH_KEY cannot be undefined. Please update top level .env file.';
      const fn = () => smiteApiClient._assertEnvVariables();
      expect(fn).toThrow(error);
    });
    it('should throw error if auth_key and dev_id are undefined', () => {
      const error = [
        'DEV_ID cannot be undefined. Please update top level .env file.',
        'AUTH_KEY cannot be undefined. Please update top level .env file.',
      ].join(' ');
      const fn = () => smiteApiClient._assertEnvVariables();
      expect(fn).toThrow(error);
    });
    it('should not throw error if dev_id and auth_key are both defined', () => {
      smiteApiClient.auth_key = '1234';
      smiteApiClient.dev_id = '1234';
      const fn = () => smiteApiClient._assertEnvVariables();
      expect(fn).not.toThrow(undefined);
    });
  });

  describe('_composeUrl', () => {
    it('should compose a url with method, dev_id, signature, and timestamp', () => {
      const method = 'createsession';
      const signature = '1234';
      const timestamp = '5678';
      const url = smiteApiClient._composeUrl(method, signature, timestamp);
      const expectedUrl = 'https://api.smitegame.com/smiteapi.svc/createsessionJson/0110/1234/5678';
      expect(url).toBe(expectedUrl);
    });
    it('should compose a url with method, signature, and timestamp and session if session_id exists', () => {
      smiteApiClient.session_id = '0000';
      const method = 'createsession';
      const signature = '1234';
      const timestamp = '5678';
      const url = smiteApiClient._composeUrl(method, signature, timestamp);
      const expectedUrl = 'https://api.smitegame.com/smiteapi.svc/createsessionJson/0110/1234/0000/5678';
      expect(url).toBe(expectedUrl);
    });
    it('should compose a url with method, dev_id, signature, and timestamp, and additional args', () => {
      const method = 'createsession';
      const signature = '1234';
      const timestamp = '5678';
      const foo = 'foo';
      const bar = 'bar';
      const url = smiteApiClient._composeUrl(method, signature, timestamp, foo, bar);
      const expectedUrl = 'https://api.smitegame.com/smiteapi.svc/createsessionJson/0110/1234/5678/foo/bar';
      expect(url).toBe(expectedUrl);
    });
  });

  describe('_generateTimeStamp', () => {
    const timestamp = smiteApiClient._generateTimeStamp();
    const now = moment.utc().format('yyyyMMDDHHmm');

    it('should output the correct year', () => {
      const year = timestamp.substring(0, 4);
      expect(year).toBe(now.substring(0, 4));
    });
    it('should output the correct month', () => {
      const month = timestamp.substring(5, 6);
      expect(month).toBe(now.substring(5, 6));
    });
    it('should output the correct day', () => {
      const day = timestamp.substring(7, 8);
      expect(day).toBe(now.substring(7, 8));
    });
    it('should output the correct minute', () => {
      const minute = timestamp.substring(9, 10);
      expect(minute).toBe(now.substring(9, 10));
    });
  });

  describe('_generateSignature', () => {
    // TODO: fill this in.
  });
});
