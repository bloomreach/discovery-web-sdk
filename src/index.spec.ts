import { faker } from '@faker-js/faker';
import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { afterEach, describe, expect, test } from 'vitest';
import { initialize } from '.';
import { productSearch } from './features/product-search/product-search';
import { clearConfig, getConfig, noConfigMessage } from './shared/config';
import { mockRequest } from './shared/mocks/mock-request.mock.spec';
import { createProductSearchOptionsMock } from './shared/mocks/product-search-options.mock.spec';
import { createSearchResponseMock } from './shared/mocks/search-response.mock.spec';
import type { SetupConfiguration } from './shared/types/configuration.type';

const config: SetupConfiguration = {
  productSearchEndpoint: faker.internet.url(),
  account_id: 1234,
  domain_key: 'example_com',
};

describe('initializing the SDK', () => {
  afterEach(() => {
    clearConfig();
  });

  test('setting initial configuration options for the SDK', async () => {
    initialize(config);
    expect(getConfig()).toEqual(config);
  });

  test('calling an API without initial config options set', async () => {
    const handler = http.get(config.productSearchEndpoint, () => {});
    const server = setupServer(handler);
    server.listen();

    await expect(productSearch(createProductSearchOptionsMock())).rejects.toThrow(noConfigMessage);

    server.close();
  });

  test('calling an API with initial config options set', async () => {
    const productSearchOptions = createProductSearchOptionsMock();
    await mockRequest(config, productSearch, productSearchOptions, [
      http.get(config.productSearchEndpoint, ({ request }) => {
        expect(request.url.includes(encodeURIComponent(config.domain_key))).toBe(true);
        return HttpResponse.json(createSearchResponseMock(), { status: 200 });
      }),
    ]);
  });
});
