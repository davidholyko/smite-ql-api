/* eslint-disable */

/**
 * This file is intended to be used for local dev only.
 * See README on how to allow git to skip changes on this file.
 */

import 'dotenv/config';
import fs from 'fs';

import _ from 'lodash';

import { smiteQLClient } from '../clients/SmiteQL';
import HELPERS from '../helpers';
import CONSTANTS from '../constants';
import MOCKS from '../mocks';

let res;

const appendToFile = (file, str) => {
  fs.writeFile(`./${file}`, str, { flag: 'a+' }, (err) => {
    if (err) {
      console.error(err);
      return;
    }
  });
};

const writeToFile = (file, objs) => {
  appendToFile(file, '[');

  _.forEach(objs, (r) => {
    appendToFile(file, JSON.stringify(r) + ',');
  });

  appendToFile(file, ']');
};

export const startSandbox = async () => {
  console.info('Sandbox started!');
  await smiteQLClient.ready();

  res = await smiteQLClient.ping();
  // res = await smiteQLClient.getDataUsed();
  // res = await smiteQLClient.getPatchInfo();
  // res = await smiteQLClient.getItems();

  // res = await smiteQLClient.getPlayer('dhko');
  // res = await smiteQLClient.getMatchHistory('dhko');
  res = await smiteQLClient.getMatchHistory('Sailum');
  // res = await smiteQLClient.getMatchHistory('TripleCCC1');
  // res = await smiteQLClient.getMatchDetails('1237226753');
  // res = await smiteQLClient.smiteApi.getMatchDetails('1229914631');
  // res = await smiteQLClient.smiteApi.getMatchDetails('1237199832');

  // res = await smiteQLClient._get('$');
  // res = await smiteQLClient._get('players.dhko');
  res = await smiteQLClient._get('players.Sailum');
  // res = await smiteQLClient._get('players.TripleCCC1.matches');
  // res = await smiteQLClient._get('global.matches');
  // res = await smiteQLClient._get('players');
  // res = await smiteQLClient._get('global.patch_versions');

  // writeToFile('items.js', res);

  console.log(res);

  await smiteQLClient._reset();
  await smiteQLClient.redis.quit();
};

startSandbox();
