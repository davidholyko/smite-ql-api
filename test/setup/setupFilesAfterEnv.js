import Emitter from 'events';

/**
 * Custom mock for Redis + RedisJSON
 * @class
 */
class RedisMockClient extends Emitter {
  constructor() {
    super();
    this.connected = false;
  }

  connect() {
    this.connected = true;
  }
}

const mockClient = new RedisMockClient();

jest.mock('redis', () => {
  return {
    createClient: () => mockClient,
  };
});
