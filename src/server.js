import SmiteClient from './clients/SmiteClient';

export const makeServer = async () => {
  await SmiteClient.getMatchHistory('dhko');
  console.log('Server started!');
};
