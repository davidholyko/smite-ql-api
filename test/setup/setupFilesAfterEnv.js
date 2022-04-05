// TODO: 'redis-mock' npm package does not support redisJSON
// We will have write the mocks manually to test redis

jest.mock('redis', () => {
  return {
    createClient: () => {
      return {
        connect: () => {},
        on: () => {},
      };
    },
  };
});
