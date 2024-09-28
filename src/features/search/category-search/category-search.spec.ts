import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createSetupConfigMock } from '../../../shared/configuration.mock';
import { mockRequest } from '../../../shared/mock-request.mock';
import { createSearchResponseMock } from '../search-response.mock';
import { categorySearch } from './category-search';
import { createCategorySearchOptionsMock } from './category-search-options.mock';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { faker } from '@faker-js/faker';

describe('Category Search API', () => {
  const q = faker.commerce.productName();
  const config = createSetupConfigMock();
  const searchOptions = createCategorySearchOptionsMock();

  test('checks that config and searchOptions are added to the searchParams in the request URL', async () => {
    const { account_id, domain_key, _br_uid_2, url, fl, start, rows } = {
      ...config,
      ...searchOptions,
    };
    let searchParams: URLSearchParams;

    await mockRequest(
      categorySearch,
      [q, config, searchOptions],
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
          search_type: 'category',
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
        categorySearch,
        [q, configWithoutEndpoint, searchOptions],
        [
          http.get(SEARCH_ENDPOINT_PROD, () => {
            return HttpResponse.json(createSearchResponseMock());
          }),
        ],
      ),
    ).resolves.not.toThrow();
  });
});
