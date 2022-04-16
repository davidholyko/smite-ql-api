import { redisClient } from '../../../src/clients/Redis';

describe('Redis', () => {
  it('should do a console error on error', () => {
    const errorSpy = jest.spyOn(console, 'error').mockImplementation();
    redisClient.emit('error', 1234);
    expect(errorSpy).toBeCalledWith('Redis Client Error: 1234');
  });
});
