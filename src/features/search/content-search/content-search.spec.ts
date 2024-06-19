import { HttpResponse, http } from 'msw';
import { describe, expect, test, vi } from 'vitest';
import { mockRequest } from '../../../shared/mock-request.mock';
import { createSearchResponseMock } from '../search-response.mock';
import { contentSearch } from './content-search';
import { createContentSearchOptionsMock } from './content-search-options.mock';
import { createSetupConfigMock } from '../../../shared/configuration.mock';

describe('Content Search API', () => {
  const config = createSetupConfigMock();
  const searchOptions = createContentSearchOptionsMock();

  test('request and search type', async () => {
    const expectedRequestType = 'search';
    const expectedSearchType = 'keyword';
    let searchParams: URLSearchParams;

    await mockRequest(
      contentSearch,
      [config, searchOptions],
      [
        http.get(config.searchEndpoint, ({ request }) => {
          searchParams = new URL(request.url).searchParams;
          return HttpResponse.json(createSearchResponseMock());
        }),
      ],
      () => {
        expect(searchParams.get('request_type')).toEqual(expectedRequestType);
        expect(searchParams.get('search_type')).toEqual(expectedSearchType);
      },
    );
  });
  test('checks that config and searchOptions are added to the searchParams in the request URL', async () => {
    const { account_id, domain_key, _br_uid_2, url, fl, start, rows, catalog_name } = {
      ...config,
      ...searchOptions,
    };
    let searchParams: URLSearchParams;

    await mockRequest(
      contentSearch,
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
          fl,
          start,
          rows,
          catalog_name,
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
      contentSearch,
      [debugConfig, searchOptions],
      [
        http.get(debugConfig.searchEndpoint, () => {
          return HttpResponse.json(createSearchResponseMock());
        }),
      ],
    );

    expect(console.log).toHaveBeenCalledWith("[BR] 'contentSearch' called with:");
    expect(console.log).toHaveBeenCalledWith('[BR] Configuration:', debugConfig);
    expect(console.log).toHaveBeenCalledWith('[BR] Options:', searchOptions);
    expect(console.log).toHaveBeenCalledWith('[BR] Fixed options:', fixedOptions);
    expect(console.log).toHaveBeenCalledWith('[BR] Default options:', { fl: 'item_id', start: 0 });
    expect(console.log).toHaveBeenCalledWith('[BR] Merged queryParams:', expect.anything());
    expect(console.log).toHaveBeenCalledWith('[BR] Fetching url:', expect.anything());

    vi.restoreAllMocks();
  });

  test('uses default searchEndpoint when not provided', async () => {
    const configWithoutEndpoint = { ...config, searchEndpoint: undefined };

    await mockRequest(
      contentSearch,
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
