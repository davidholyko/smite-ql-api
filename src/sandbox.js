/* eslint-disable */
import 'dotenv/config';
import { SmiteClient } from './clients/SmiteClient';

export const startSandbox = async () => {
  //   const res = await SmiteClient.getMatchHistory('dhko');
  //   const res = await SmiteClient.getMatchDetails(1229914631);
  console.log('Sandbox started!');
};

startSandbox();
