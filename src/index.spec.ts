import { SetupServerApi } from 'msw/node';
import { afterAll, beforeAll, describe, expect, test } from 'vitest';
import { startWorker } from './mocks/mockServer';
import { SearchResponse } from './types/search-response.type';
import { endpointProductSearchApi } from './utils/constants';

describe('Product Search & Category API', () => {
  let server: SetupServerApi;

  beforeAll(() => {
    server = startWorker();
  });

  test('Call API to get result', async () => {
    const response: SearchResponse = await fetch(endpointProductSearchApi).then((data) =>
      data.json(),
    );

    expect(response.response?.docs?.at(0)?.description).toBeDefined();
  });

  afterAll(() => {
    server.close();
  });
});
