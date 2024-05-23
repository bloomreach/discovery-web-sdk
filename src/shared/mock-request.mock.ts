import type { HttpHandler } from 'msw';
import { setupServer } from 'msw/node';
import type { SetupConfiguration } from '../initialize/configuration.type';
import { initialize } from '../initialize/initialize';

export async function mockRequest<
  T extends (...args: any[]) => Promise<any>,
>(
  config: SetupConfiguration,
  fn: T,
  params: Parameters<T>,
  handlers: HttpHandler[],
  callback?: (result: Awaited<ReturnType<T>>) => void,
): Promise<void> {
  const server = setupServer(...handlers);
  server.listen();

  initialize(config);
  const result = await fn(...params);

  if (callback) {
    callback(result);
  }

  server.close();
}
