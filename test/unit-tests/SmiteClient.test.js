import client, { SmiteClient } from '../../src/clients/SmiteClient';

// const mockedCreateSessionJson = {
//   ret_msg: 'Approved',
//   session_id: 'A1542BE6B26E4B1BA692565A5351405B',
//   timestamp: '3/22/2022 1:19:32 AM',
// };

describe('SmiteClient', () => {
  it('should be an instance of class "SmiteClient"', async () => {
    expect(client).toBeInstanceOf(SmiteClient);
  });
});
