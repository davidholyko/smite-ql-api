import _ from 'lodash';

import { makeServer } from '../../src/server';

describe('makeServer', () => {
  jest.spyOn(console, 'info').mockImplementation(_.noop);

  it('should console info "Server started!"', async () => {
    await makeServer();
    expect(console.info).toBeCalledWith('Server started!');
  });
});
