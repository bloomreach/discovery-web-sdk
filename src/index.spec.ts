import { faker } from '@faker-js/faker';
import { HttpHandler, HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { afterEach, describe, expect, test } from 'vitest';
import { initialize } from '.';
import { searchProducts } from './features/product-search/product-search';
import { Configuration, clearConfig, getConfig, noConfigMessage } from './shared/config';
import { createSearchResponseMock } from './shared/mocks/search-response.mock';
import { createSearchOptionsMock } from './shared/mocks/search-options.mock';

describe('initializing the SDK', () => {
  const endpoint = faker.internet.url();
  const config: Configuration = {
    endpoint,
    account_id: 1234,
    domain_key: 'example_com',
  };
  const searchOptions = createSearchOptionsMock({
    fl: 'pid,title,description',
  });

  const testRequest = async (handlers: HttpHandler[]) => {
    const server = setupServer(...handlers);
    server.listen();

    initialize(config);
    await searchProducts(searchOptions);

    server.close();
  };

  afterEach(() => {
    clearConfig();
  });

  test('setting initial configuration options for the SDK', async () => {
    initialize(config);
    expect(getConfig()).toEqual(config);
  });

  test('calling the Product Search API without initial config options set', async () => {
    const handler = http.get(endpoint, () => {});
    const server = setupServer(handler);
    server.listen();

    await expect(searchProducts(createSearchOptionsMock())).rejects.toThrow(noConfigMessage);

    server.close();
  });

  test('calling the Product Search API with initial config options set', async () => {
    await testRequest([
      http.get(endpoint, ({ request }) => {
        expect(request.url.includes(encodeURIComponent(config.domain_key))).toBe(true);
        expect(request.url.includes(encodeURIComponent(searchOptions.fl))).toBe(true);
        return HttpResponse.json(createSearchResponseMock(), { status: 200 });
      }),
    ]);
  });

  test('calls Product Search API with sane defaults', async () => {
    await testRequest([
      http.get(endpoint, ({ request }) => {
        const url = new URL(request.url);
        expect(url.searchParams.get('request_type')).toEqual('search');
        expect(url.searchParams.get('search_type')).toEqual('keyword');
        return HttpResponse.json(createSearchResponseMock(), { status: 200 });
      }),
    ]);
  });
});
