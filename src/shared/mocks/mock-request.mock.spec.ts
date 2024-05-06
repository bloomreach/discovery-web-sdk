import type { HttpHandler } from 'msw';
import { setupServer } from 'msw/node';
import { initialize } from '../../index';
import type { SetupConfiguration } from '../types/configuration.type';

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
