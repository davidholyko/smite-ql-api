import { SmiteQLClient } from './clients/SmiteQL';

export const makeServer = async () => {
  console.info('Server started!');
  return SmiteQLClient;
};
