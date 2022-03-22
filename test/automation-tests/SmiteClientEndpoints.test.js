import SmiteClient from '../../src/clients/SmiteClient';

describe('SmiteClient Endpoints', () => {
  beforeEach(() => {
    SmiteClient.session_id = null;
  });

  describe('testSession', () => {
    it('should create a new session if a session_id does not already exist', async () => {
      await SmiteClient.testSession();
      expect(SmiteClient.session_id).not.toBe(null);
    });
    it('should get a successful response when pinging testsession endpoint', async () => {
      const performTest = async () => {
        await SmiteClient.testSession();
      };

      expect(performTest).not.toThrow(undefined);
    });
  });
});
