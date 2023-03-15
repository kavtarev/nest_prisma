import { Test } from '@nestjs/testing';
import { AppModule } from '../../src/app.module';
import { TestClient } from './test-client';

const PORT = 3110;

export async function setup(urls: string[]) {
  const moduleRef = await Test.createTestingModule({
    imports: [AppModule],
  }).compile();

  const app = moduleRef.createNestApplication();
  await app.init();
  await app.listen(PORT);

  const clients = urls.map((url) => {
    return new TestClient<any, any>(PORT, url, {});
  });

  return {
    app,
    clients,
  };
}
