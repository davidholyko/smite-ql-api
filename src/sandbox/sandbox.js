/* eslint-disable */

/**
 * This file is intended to be used for local dev only.
 * See README on how to allow git to skip changes on this file.
 */

import 'dotenv/config';

import _ from 'lodash';

import { smiteClient } from '../clients/SmiteQL';
import HELPERS from '../helpers';
import CONSTANTS from '../constants';
import MOCKS from '../mocks';

import { writeFile, appendToFile } from './fs';

let res;

export const startSandbox = async () => {
  console.info('Sandbox started!');

  res = await smiteClient.ping();
  // res = await smiteClient.getDataUsed();
  // res = await smiteClient.getPatchInfo();
  // res = await smiteClient.getItems();
  // res = await smiteClient.getGods();

  // res = await smiteClient.getPlayer('Dreamkill4life');
  // res = await smiteClient.getMatchHistory('Noødle');
  // res = await smiteClient.getMatchHistory('CrackshotCletus');
  // res = await smiteClient.getMatchHistory('CozierSet2', { platform: 'XBOX' });
  // res = await smiteClient.getMatchHistory('Habibinator777', { platform: 'PS4' });
  // res = await smiteClient.getMatchDetails('1237226753');

  // res = await smiteClient.smiteApi.getPlayer('12282812');
  // res = await smiteClient.smiteApi.testSession('12282812');
  // res = await smiteClient.smiteApi.getPlayerIdByName('Habibinator777');
  // res = await smiteClient.smiteApi.getPlayer('503268682');
  // res = await smiteClient.smiteApi.getMatchHistory('709450203');

  // res = await smiteClient.smiteApi.getMatchDetails('1229914631');
  // res = await smiteClient.smiteApi.getMatchDetails('1237199832');

  // res = await smiteClient._scanMatchHistory('dhko', { index: 0 });

  // res = await smiteClient._get('$');
  // res = await smiteClient._get('players.dhko');
  // res = await smiteClient._get('players.Sailum');
  // res = await smiteClient._get('players.TripleCCC1.matches');
  // res = await smiteClient._get('global.matches');
  // res = await smiteClient._get('players');
  // res = await smiteClient._get('global.patch_versions');

  // writeToFile('gods.js', res);

  console.log(res);

  await smiteClient.redis.quit();
};

function runLogic() {
  const output = HELPERS.processPartyDetails(MOCKS.mockMatchDetails);
  console.log(JSON.stringify(output, null, 2));
}

startSandbox();
// runLogic();
