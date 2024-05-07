import { faker } from '@faker-js/faker';
import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createCategorySearchOptionsMock } from '../../shared/mocks/category-search-options.mock';
import { createSetupConfigMock } from '../../shared/mocks/configuration.mock';
import { mockRequest } from '../../shared/mocks/mock-request.mock';
import { createSearchResponseMock } from '../../shared/mocks/search-response.mock';
import { categorySearch } from './category-search';

describe('Category Search API', () => {
  const config = createSetupConfigMock();
  const searchOptions = createCategorySearchOptionsMock({
    q: `cat${faker.string.numeric(4)}`,
  });

  test('request and search type', async () => {
    const expectedRequestType = 'search';
    const expectedSearchType = 'category';

    await mockRequest(config, categorySearch, searchOptions, [
      http.get(config.searchEndpoint, ({ request }) => {
        const { searchParams } = new URL(request.url);

        expect(searchParams.get('request_type')).toEqual(expectedRequestType);
        expect(searchParams.get('search_type')).toEqual(expectedSearchType);

        return HttpResponse.json(createSearchResponseMock());
      }),
    ]);
  });
});
