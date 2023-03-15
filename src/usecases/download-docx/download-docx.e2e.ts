import { setup } from '../../test/setup';
import { TestClient } from '../../test/test-client';

describe('Download DOCX', () => {
  it('download', async () => {
    const { app, clients } = await setup(['download-docx']);
    const downloadClient: TestClient<any, string> = clients[0];

    const res = await downloadClient.request({ name: 23 });

    expect(typeof res).toBe('string');

    await app.close();
  });
});
