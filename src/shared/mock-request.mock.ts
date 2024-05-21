import type { HttpHandler } from 'msw';
import { setupServer } from 'msw/node';
import type { SetupConfiguration } from '../initialize/configuration.type';
import { initialize } from '../initialize/initialize';

export async function mockRequest<
  T extends (arg: Parameters<T>[0]) => Promise<Awaited<ReturnType<T>>>,
>(
  config: SetupConfiguration,
  fn: T,
  params: Parameters<T>[0],
  handlers: HttpHandler[],
  callback?: (result: Awaited<ReturnType<T>>) => void,
): Promise<void> {
  const server = setupServer(...handlers);
  server.listen();

  initialize(config);
  const result = await fn(params);

  if (callback) {
    callback(result);
  }

  server.close();
}
