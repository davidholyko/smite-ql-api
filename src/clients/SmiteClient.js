import axios from 'axios';
import _ from 'lodash';
import md5 from 'md5';
import moment from 'moment';
import utf8 from 'utf8';

import CONSTANTS from '../constants';
import HELPERS from '../helpers';

const { API, METHODS } = CONSTANTS;
const { BASE_URL } = API;

const { DEV_ID, AUTH_KEY } = API;

export class SmiteClient {
  constructor() {
    this.lang = 1; // 1 represents English
    this.session_id = null;
  }

  /**
   * creates a request url
   * @param {String} method - type of method
   * @param {String} signature - signature
   * @param {String} timestamp - timestamp
   * @param {...String} args - extra args
   * @returns {String} - url
   */
  _composeUrl(method, signature, timestamp, ...args) {
    const session = this.session_id ? `/${this.session_id}` : '';
    let url = `${BASE_URL}/${method}/${DEV_ID}/${signature}${session}/${timestamp}`;

    [...args].forEach((arg) => {
      url += `/${arg}`;
    });

    return url;
  }

  /**
   * creates a timestamp
   * @returns {String} timestamp
   */
  _generateTimeStamp() {
    const timestamp = moment.utc().format(API.TIME_FORMAT);
    return timestamp;
  }

  /**
   *
   * @param {String} method - type of method
   * @returns {void}
   */
  _generateSignature(method = METHODS.CREATE_SESSION) {
    const timestamp = this._generateTimeStamp();
    const text = DEV_ID + method + AUTH_KEY + timestamp;
    const encodedText = utf8.encode(text);
    const signature = md5(encodedText);
    return signature;
  }

  /**
   *
   * @param {String} method - method - like 'createsession' or 'createsessionJson'
   * @param {...String} args - extra args
   * @returns {String} - url
   */
  _generateEndpoint(method = METHODS.CREATE_SESSION_JSON, ...args) {
    const parsedMethod = HELPERS.parseMethod(method);
    const signature = this._generateSignature(parsedMethod);
    const timestamp = this._generateTimeStamp();
    const url = this._composeUrl(method, signature, timestamp, ...args);
    return url;
  }

  /**
   *
   * @param {String} url - url
   * @returns {Object} - data
   */
  async _processRequest(url) {
    const response = await await axios({ method: 'get', url });
    const { data } = response;

    // This might not belong here. sets up
    // session id if we are making createsession request
    if (_.get(data, 'session_id')) {
      this.session_id = data.session_id;
    }

    return data;
  }

  /**
   * creates a session
   * @returns {void}
   */
  async createSession() {
    const url = this._generateEndpoint(METHODS.CREATE_SESSION_JSON);
    return await this._processRequest(url);
  }

  /**
   *
   * @param {String} method - method
   * @param {...String} args - extra args
   * @returns {Object} - data
   */
  async makeRequest(method, ...args) {
    if (_.isEmpty(this.session_id)) {
      await this.createSession();
    }

    const url = this._generateEndpoint(method, ...args);
    const data = await this._processRequest(url);
    return data;
  }

  /**
   * tests if createsession was successful
   * @returns {void}
   */
  async testSession() {
    const response = await this.makeRequest(METHODS.TEST_SESSION_JSON);

    if (!_.includes(response, 'This was a successful test')) {
      throw new Error('Test Session Failed!');
    }
  }

  /**
   *
   * @param {String} accountName - account name for player, like 'dhko'
   * @returns {Object} - data
   */
  async getPlayer(accountName) {
    const response = await this.makeRequest(METHODS.GET_PLAYER_JSON, accountName);
    return response;
  }

  /**
   *
   * @param {String} accountName - account name for player, like 'dhko'
   * @returns {Array<Object>} - data of last 50 matches
   */
  async getMatchHistory(accountName) {
    const response = await this.makeRequest(METHODS.GET_MATCH_HISTORY_JSON, accountName);
    return response;
  }
}

const client = new SmiteClient();

export default client;
