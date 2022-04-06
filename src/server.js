import SmiteApiClient from './clients/SmiteApiClient';

export const makeServer = async () => {
  console.info('Server started!');
  await SmiteApiClient.testSession();
  return SmiteApiClient;
};