/* eslint-disable */
import 'dotenv/config';

import SmiteApiClient from '../clients/SmiteApiClient';
import HELPERS from '../helpers';
import CONSTANTS from '../constants';

import mocks from './mocks';

const { ENTRY } = CONSTANTS;

let res;

export const startSandbox = async () => {
  console.info('Sandbox started!');
  await SmiteApiClient.ready();
  // res = await SmiteApiClient.getPlayer('dhko');
  res = await SmiteApiClient.getMatchHistory('dhko');
  // res = await SmiteApiClient.getMatchDetails(1232511801);
  // res = HELPERS.transformMatchDetails(res);

  console.log(res);

  await SmiteApiClient.redisClient.flushAll();
  await SmiteApiClient.redisClient.quit();
};

startSandbox();
