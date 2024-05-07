import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { describe, expect, test } from 'vitest';
import { initialize } from '.';
import { productSearch } from './features/product-search/product-search';
import { clearConfig, getConfig, noConfigMessage } from './shared/config';
import { createSetupConfigMock } from './shared/mocks/configuration.mock';
import { mockRequest } from './shared/mocks/mock-request.mock';
import { createProductSearchOptionsMock } from './shared/mocks/product-search-options.mock';
import { createSearchResponseMock } from './shared/mocks/search-response.mock';

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
