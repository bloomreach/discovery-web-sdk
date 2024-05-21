import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { describe, expect, test } from 'vitest';
import { initialize, productSearch } from '.';
import { createProductSearchOptionsMock } from './features/search/product-search/product-search-options.mock';
import { createSearchResponseMock } from './features/search/search-response.mock';
import { createSetupConfigMock } from './initialize/configuration.mock';
import { clearConfig, getConfig, noConfigMessage } from './shared/config';
import { mockRequest } from './shared/mock-request.mock';

describe('initializing the SDK', () => {
  const config = createSetupConfigMock();

  test('setting initial configuration options for the SDK', async () => {
    initialize(config);
    expect(getConfig()).toEqual(config);
  });

  test('calling an API without initial config options set', async () => {
    clearConfig();
    const handler = http.get(config.searchEndpoint, () => {});
    const server = setupServer(handler);
    server.listen();

    await expect(productSearch(createProductSearchOptionsMock())).rejects.toThrow(noConfigMessage);

    server.close();
  });

  test('calling an API with initial config options set', async () => {
    const productSearchOptions = createProductSearchOptionsMock();
    await mockRequest(config, productSearch, productSearchOptions, [
      http.get(config.searchEndpoint, ({ request }) => {
        expect(request.url.includes(encodeURIComponent(config.domain_key))).toBe(true);
        return HttpResponse.json(createSearchResponseMock(), { status: 200 });
      }),
    ]);
  });
});
