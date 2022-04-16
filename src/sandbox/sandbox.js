/* eslint-disable */

/**
 * This file is intended to be used for local dev only.
 * See README on how to allow git to skip changes on this file.
 */

import 'dotenv/config';

import { smiteQLClient } from '../clients/SmiteQL';
import HELPERS from '../helpers';
import CONSTANTS from '../constants';
import MOCKS from '../mocks';

let res;

export const startSandbox = async () => {
  console.info('Sandbox started!');
  await smiteQLClient.ready();

  res = await smiteQLClient.ping();
  // res = await smiteQLClient.getDataUsed();
  // res = await smiteQLClient.getPatchInfo();
  // res = await smiteQLClient.getItems();

  res = await smiteQLClient.getPlayer('dhko');
  // res = await smiteQLClient.getMatchHistory('TripleCCC1');
  // res = await smiteQLClient.getMatchHistory('dhko');
  // res = await smiteQLClient.getMatchDetails('1237039623');
  // res = await smiteQLClient.smiteApi.getMatchDetails('1229914631');
  // res = await smiteQLClient.smiteApi.getMatchDetails('1001217959');

  // res = await smiteQLClient._get('players.dhko');
  // res = await smiteQLClient._get('global.matches');
  // res = await smiteQLClient._get('players');
  res = await smiteQLClient._get('global.patch_versions');

  console.log(res);

  await smiteQLClient.redis.flushAll();
  await smiteQLClient.redis.quit();
};

startSandbox();
