import { describe, expect, test } from 'vitest';
import { http, HttpResponse } from 'msw';
import { setupServer } from 'msw/node';

const handlers = [
  http.get('https://core.dxpapi.com/api/v1/core/', () => {
    return HttpResponse.json({
      id: 'Hello world',
    });
  }),
];

const server = setupServer(...handlers);
server.listen();

describe('my test suite', () => {
  test('say hello world', async () => {
    const response = await fetch('https://core.dxpapi.com/api/v1/core/').then((data) => data.json());
    expect(response).toEqual({ id: 'Hello world' });
  });
});
