import { makeServer } from '../../src/server';
import _ from 'lodash';

describe('makeServer', () => {
  jest.spyOn(console, 'log').mockImplementation(_.noop);

  it('should console log "Server started!"', async () => {
    await makeServer();
    expect(console.log).toBeCalledWith('Server started!');
  });
});