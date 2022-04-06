import Emitter from 'events';

import _ from 'lodash';

/**
 * Custom mock for RedisJSON
 * @class
 */
class RedisJsonMock {
  constructor() {
    this.data = {};
  }

  set(key, path, value) {
    if (path === '$') {
      // set objects on the root '$'
      // key '$' doesn't appear
      _.set(this.data, `${key}`, value);
    } else {
      _.set(this.data, `${key}.${path}`, value);
    }
  }

  get(key, { path }) {
    return _.get(this.data, `${key}.${path}`);
  }

  type(key, path) {
    const value = _.get(this.data, `${key}.${path}`);
    return value ? typeof value : null;
  }
}

/**
 * Custom mock for Redis + RedisJSON
 * @class
 */
export class RedisMockClient extends Emitter {
  constructor() {
    super();
    this.connected = false;
    this.json = new RedisJsonMock();
  }

  connect() {
    this.connected = true;
  }

  flushAll() {
    this.json.data = {};
  }
}

const mockRedisClient = new RedisMockClient();

jest.mock('redis', () => {
  return {
    createClient: () => mockRedisClient,
  };
});
