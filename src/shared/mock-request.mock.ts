import type { HttpHandler } from 'msw';
import { setupServer } from 'msw/node';

/**
 * Setup a mock server that will intercept a fetch request fired by the provided function usnig the
 * provided handlers
 */
export async function mockRequest<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  params: Parameters<T>,
  handlers: HttpHandler[],
  callback?: (result: Awaited<ReturnType<T>>) => void,
): Promise<void> {
  const server = setupServer(...handlers);
  server.listen();
  const result = await fn(...params);
  server.close();

  if (callback) {
    callback(result);
  }
}
