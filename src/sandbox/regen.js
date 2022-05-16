/* eslint-disable */

/**
 * This file is intended to be used for local dev only.
 * See README on how to allow git to skip changes on this file.
 */

import 'dotenv/config';

import _ from 'lodash';

import { smiteClient } from '../clients/SmiteQL';

let res;

export const startSandbox = async () => {
  console.info('Sandbox started!');

  res = await smiteClient.ping();
  res = await smiteClient.regenerateAllMatches();

  console.log(res);

  await smiteClient.redis.quit();
};

startSandbox();
