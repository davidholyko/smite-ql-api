import moment from 'moment';

import SmiteClient, { SmiteClient as SmiteClientClass } from '../../src/clients/SmiteClient';

// const mockedCreateSessionJson = {
//   ret_msg: 'Approved',
//   session_id: 'A1542BE6B26E4B1BA692565A5351405B',
//   timestamp: '3/22/2022 1:19:32 AM',
// };

describe('SmiteClient', () => {
  beforeEach(() => {
    SmiteClient.session_id = null;
  });

  describe('constructor', () => {
    it('should be an instance of class "SmiteClient"', async () => {
      expect(SmiteClient).toBeInstanceOf(SmiteClientClass);
    });
  });

  describe('_composeUrl', () => {
    it('should compose a url based on method, signature, and timestamp', () => {
      const method = 'createsession';
      const signature = '1234';
      const timestamp = '5678';
      const url = SmiteClient._composeUrl(method, signature, timestamp);
      expect(url).toBe('https://api.smitegame.com/smiteapi.svc/createsession/2787/1234/5678');
    });
    it('should compose a url based on method, signature, and timestamp and session if session_id exists', () => {
      SmiteClient.session_id = '0000';
      const method = 'createsession';
      const signature = '1234';
      const timestamp = '5678';
      const url = SmiteClient._composeUrl(method, signature, timestamp);
      expect(url).toBe('https://api.smitegame.com/smiteapi.svc/createsession/2787/1234/0000/5678');
    });
  });

  describe('_generateTimeStamp', () => {
    const timestamp = SmiteClient._generateTimeStamp();
    const now = moment.utc().format('yyyyMMDDHHmm');

    const year = timestamp.substring(0, 4);
    const month = timestamp.substring(5, 6);
    const day = timestamp.substring(7, 8);
    const minute = timestamp.substring(9, 10);

    expect(year).toBe(now.substring(0, 4));
    expect(month).toBe(now.substring(5, 6));
    expect(day).toBe(now.substring(7, 8));
    expect(minute).toBe(now.substring(9, 10));
  });
});
