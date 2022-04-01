import moment from 'moment';

import BaseSmiteClient, { BaseSmiteClient as Client } from '../../src/clients/BaseSmiteClient';

describe('BaseSmiteClient', () => {
  beforeEach(() => {
    BaseSmiteClient.session_id = null;
  });

  describe('constructor', () => {
    it('should be an instance of class "BaseSmiteClient"', async () => {
      expect(BaseSmiteClient).toBeInstanceOf(Client);
    });
  });

  describe('_composeUrl', () => {
    it('should compose a url with method, signature, and timestamp', () => {
      const method = 'createsession';
      const signature = '1234';
      const timestamp = '5678';
      const url = BaseSmiteClient._composeUrl(method, signature, timestamp);
      expect(url).toBe('https://api.smitegame.com/smiteapi.svc/createsession/2787/1234/5678');
    });
    it('should compose a url with method, signature, and timestamp and session if session_id exists', () => {
      BaseSmiteClient.session_id = '0000';
      const method = 'createsession';
      const signature = '1234';
      const timestamp = '5678';
      const url = BaseSmiteClient._composeUrl(method, signature, timestamp);
      expect(url).toBe('https://api.smitegame.com/smiteapi.svc/createsession/2787/1234/0000/5678');
    });
    it('should compose a url with method, signature, and timestamp, and additional args', () => {
      const method = 'createsession';
      const signature = '1234';
      const timestamp = '5678';
      const foo = 'foo';
      const bar = 'bar';
      const url = BaseSmiteClient._composeUrl(method, signature, timestamp, foo, bar);
      expect(url).toBe(
        'https://api.smitegame.com/smiteapi.svc/createsession/2787/1234/5678/foo/bar',
      );
    });
  });

  describe('_generateTimeStamp', () => {
    const timestamp = BaseSmiteClient._generateTimeStamp();
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
    // TODO
  });
});
