/* eslint-disable */
import 'dotenv/config';
import { SmiteClient } from '../clients/SmiteClient';
import { matchDetails } from './mocks/getMatchDetails';
import HELPERS from '../helpers';

// export const startSandbox = async () => {
//   //   const res = await SmiteClient.getMatchHistory('dhko');
//   //   const res = await SmiteClient.getMatchDetails(1229914631);
//   console.log('Sandbox started!');
// };

// startSandbox();

const a = HELPERS.transformMatchDetails(matchDetails);
const b = HELPERS.parsePlayerName('[LRT]dalvon2');
console.log(a);
console.log(b);
