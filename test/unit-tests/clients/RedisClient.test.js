import RedisClient from '../../../src/clients/RedisClient';

describe('RedisClient', () => {
  it('should do a console error on error', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation();
    RedisClient.emit('error', 1234);
    expect(errorSpy).toBeCalledWith('Redis Client Error: 1234');
  });
});
