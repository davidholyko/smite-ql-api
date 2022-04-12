/* eslint-disable */

/**
 * This file is intended to be used for local dev only. See readme on how to
 * allow git to skip changes on this file.
 */

import 'dotenv/config';

import SmiteApiClient from '../clients/SmiteApiClient';
import HELPERS from '../helpers';
import CONSTANTS from '../constants';
import MOCKS from './mocks';

let res;

export const startSandbox = async () => {
  console.info('Sandbox started!');
  await SmiteApiClient.ready();

  // res = await SmiteApiClient.ping();
  // res = await SmiteApiClient.getDataUsed();

  // res = await SmiteApiClient.getPlayer('dhko');
  // res = await SmiteApiClient.getMatchHistory('TripleCCC1');
  // res = await SmiteApiClient.getMatchHistory('dhko');
  // res = await SmiteApiClient.getMatchDetails('1233987056');
  // res = await SmiteApiClient.baseClient.getMatchDetails('1229914631');
  res = await SmiteApiClient.baseClient.getMatchDetails('1001217959');

  // res = await SmiteApiClient._get('players.dhko');
  // res = await SmiteApiClient._get('global.matches');
  // res = await SmiteApiClient._get('players');

  console.log(res);

  await SmiteApiClient.redisClient.flushAll();
  await SmiteApiClient.redisClient.quit();
};

startSandbox();
