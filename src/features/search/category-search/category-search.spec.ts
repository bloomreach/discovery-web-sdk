import { faker } from '@faker-js/faker';
import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createSetupConfigMock } from '../../../shared/configuration.mock';
import { mockRequest } from '../../../shared/mock-request.mock';
import { createSearchResponseMock } from '../search-response.mock';
import { categorySearch } from './category-search';
import { createCategorySearchOptionsMock } from './category-search-options.mock';

describe('Category Search API', () => {
  const config = createSetupConfigMock();
  const searchOptions = createCategorySearchOptionsMock({
    q: `cat${faker.string.numeric(4)}`,
  });

  test('request and search type', async () => {
    const expectedRequestType = 'search';
    const expectedSearchType = 'category';
    let searchParams: URLSearchParams;

    await mockRequest(
      categorySearch,
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
});
