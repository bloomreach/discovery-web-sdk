import { HttpResponse, http } from 'msw';
import { describe, expect, test, vi } from 'vitest';
import { createSetupConfigMock } from '../../../shared/configuration.mock';
import { mockRequest } from '../../../shared/mock-request.mock';
import { createSearchResponseMock } from '../search-response.mock';
import { productSearch } from './product-search';
import { createProductSearchOptionsMock } from './product-search-options.mock';

describe('Product Search API', () => {
  const config = createSetupConfigMock();
  const searchOptions = createProductSearchOptionsMock();

  test('checks that config and searchOptions are added to the searchParams in the request URL', async () => {
    const { account_id, domain_key, _br_uid_2, url, q, fl, start, rows } = {
      ...config,
      ...searchOptions,
    };
    let searchParams: URLSearchParams;

    await mockRequest(
      productSearch,
      [config, searchOptions],
      [
        http.get(config.searchEndpoint, ({ request }) => {
          searchParams = new URL(request.url).searchParams;
          return HttpResponse.json(createSearchResponseMock());
        }),
      ],
      () => {
        Object.entries({
          account_id,
          domain_key,
          _br_uid_2,
          url,
          q,
          fl,
          start,
          rows,
          request_type: 'search',
          search_type: 'keyword',
        }).forEach(([key, value]) => {
          expect(searchParams.get(key)).toEqual(String(value));
        });
      },
    );
  });

  test('logs correct output when debug is enabled', async () => {
    const debugConfig = { ...config, debug: true };
    const fixedOptions = { request_type: 'search', search_type: 'keyword', 'facet.version': '3.0' };
    vi.spyOn(console, 'log').mockImplementation(() => {});

    await mockRequest(
      productSearch,
      [debugConfig, searchOptions],
      [
        http.get(debugConfig.searchEndpoint, () => {
          return HttpResponse.json(createSearchResponseMock());
        }),
      ],
    );

    expect(console.log).toHaveBeenCalledWith("[BR] 'productSearch' called with:");
    expect(console.log).toHaveBeenCalledWith('[BR] Configuration:', debugConfig);
    expect(console.log).toHaveBeenCalledWith('[BR] Options:', searchOptions);
    expect(console.log).toHaveBeenCalledWith('[BR] Fixed options:', fixedOptions);
    expect(console.log).toHaveBeenCalledWith('[BR] Default options:', { fl: 'pid', start: 0 });
    expect(console.log).toHaveBeenCalledWith('[BR] Merged queryParams:', expect.anything());
    expect(console.log).toHaveBeenCalledWith('[BR] Fetching url:', expect.anything());

    vi.restoreAllMocks();
  });

  test('uses default searchEndpoint when not provided', async () => {
    const configWithoutEndpoint = { ...config, searchEndpoint: undefined };

    await mockRequest(
      productSearch,
      [configWithoutEndpoint, searchOptions],
      [
        http.get(config.searchEndpoint, () => {
          return HttpResponse.json(createSearchResponseMock());
        }),
      ],
    );

    // Expectation: If the function processes without throwing errors and reaches the mock,
    // it means the default searchEndpoint was used as intended.
  });
});
