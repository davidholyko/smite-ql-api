import Emitter from 'events';

import _ from 'lodash';

import CONSTANTS from '../../src/constants';

const { SMITE_QL_KEYS } = CONSTANTS;
const { ROOT } = SMITE_QL_KEYS;

/**
 * Custom mock for RedisJSON
 * @class
 */
class RedisJsonMock {
  constructor() {
    this.data = {};
  }

  arrAppend() {
    // TODO: fill in
  }

  arrInsert() {
    // TODO: fill in
  }

  set(key, path, value) {
    // when objects are set on the root '$', the key '$' doesn't appear
    const pathToObject = path === ROOT ? key : `${key}.${path}`;

    _.set(this.data, pathToObject, value);
  }

  get(key, { path }) {
    const data = _.get(this.data, `${key}.${path}`);

    return path === ROOT ? this.data : data;
  }

  type(key, path) {
    const value = _.get(this.data, `${key}.${path}`);
    const returnType = value ? typeof value : null;

    return path === ROOT ? !_.isEmpty(this.data) : returnType;
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
