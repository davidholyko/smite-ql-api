import BaseSmiteClient from '../../src/clients/BaseSmiteClient';

describe('BaseSmiteClient Endpoints', () => {
  beforeEach(() => {
    BaseSmiteClient.session_id = null;
  });

  describe('testSession', () => {
    it('should create a new session if a session_id does not already exist', async () => {
      await BaseSmiteClient.testSession();
      expect(BaseSmiteClient.session_id).not.toBe(null);
    });
    it('should get a successful response when pinging testsession endpoint', async () => {
      const performTest = async () => {
        await BaseSmiteClient.testSession();
      };

      expect(performTest).not.toThrow(undefined);
    });
  });
});
