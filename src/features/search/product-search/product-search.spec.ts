import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createSetupConfigMock } from '../../../shared/configuration.mock';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
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

  test('uses default searchEndpoint when not provided', async () => {
    const configWithoutEndpoint = { ...config, searchEndpoint: undefined };

    await expect(
      mockRequest(
        productSearch,
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
