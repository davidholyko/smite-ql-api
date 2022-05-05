/* eslint-disable */

/**
 * This file is intended to be used for local dev only.
 * See README on how to allow git to skip changes on this file.
 */

import 'dotenv/config';
import fs from 'fs';

import _ from 'lodash';

// import { smiteQLClient } from '../clients/SmiteQL';
import HELPERS from '../helpers';
import CONSTANTS from '../constants';
import MOCKS from '../mocks';

import { writeFile, appendToFile } from './fs';

let res;

export const startSandbox = async () => {
  console.info('Sandbox started!');

  res = await smiteQLClient.ping();
  // res = await smiteQLClient.getDataUsed();
  // res = await smiteQLClient.getPatchInfo();
  // res = await smiteQLClient.getItems();
  // res = await smiteQLClient.getGods();

  // res = await smiteQLClient.getPlayer('dhko');
  // res = await smiteQLClient.getMatchHistory('dhko');
  // res = await smiteQLClient.getMatchHistory('Marshellow');
  // res = await smiteQLClient.getMatchHistory('CrackshotCletus');
  // res = await smiteQLClient.getMatchDetails('1237226753');

  // res = await smiteQLClient.smiteApi.getPlayer('12282812');
  res = await smiteQLClient.smiteApi.testSession('12282812');
  // res = await smiteQLClient.smiteApi.getMatchDetails('1229914631');
  // res = await smiteQLClient.smiteApi.getMatchDetails('1237199832');

  // res = await smiteQLClient._scanMatchHistory('dhko', { index: 0 });

  // res = await smiteQLClient._get('$');
  // res = await smiteQLClient._get('players.dhko');
  // res = await smiteQLClient._get('players.Sailum');
  // res = await smiteQLClient._get('players.TripleCCC1.matches');
  // res = await smiteQLClient._get('global.matches');
  // res = await smiteQLClient._get('players');
  // res = await smiteQLClient._get('global.patch_versions');

  // writeToFile('gods.js', res);

  console.log(res);

  // await smiteQLClient._reset();
  await smiteQLClient.redis.quit();
};

function runLogic() {
  const output = HELPERS.processPartyDetails(MOCKS.mockMatchDetails);
  console.log(JSON.stringify(output, null, 2));
}

// startSandbox();
runLogic();
