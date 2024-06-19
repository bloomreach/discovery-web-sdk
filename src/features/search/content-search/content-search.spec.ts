import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createSetupConfigMock } from '../../../shared/configuration.mock';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { mockRequest } from '../../../shared/mock-request.mock';
import { createSearchResponseMock } from '../search-response.mock';
import { contentSearch } from './content-search';
import { createContentSearchOptionsMock } from './content-search-options.mock';

describe('Content Search API', () => {
  const config = createSetupConfigMock();
  const searchOptions = createContentSearchOptionsMock();

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

  test('uses default searchEndpoint when not provided', async () => {
    const configWithoutEndpoint = { ...config, searchEndpoint: undefined };

    await expect(
      mockRequest(
        contentSearch,
        [configWithoutEndpoint, searchOptions],
        [
          http.get(SEARCH_ENDPOINT_PROD, () => {
            return HttpResponse.json(createSearchResponseMock());
          }),
        ],
      ),
    ).resolves.not.toThrow();
  });
});
