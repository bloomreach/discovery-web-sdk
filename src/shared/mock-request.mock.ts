import type { HttpHandler } from 'msw';
import { setupServer } from 'msw/node';

export async function mockRequest<T extends (...args: any[]) => Promise<any>>(
  fn: T,
  params: Parameters<T>,
  handlers: HttpHandler[],
  callback?: (result: Awaited<ReturnType<T>>) => void,
): Promise<void> {
  const server = setupServer(...handlers);
  server.listen();

  const result = await fn(...params);

  if (callback) {
    callback(result);
  }

  server.close();
}
