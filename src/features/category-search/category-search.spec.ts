import { faker } from '@faker-js/faker';
import { HttpResponse, http } from 'msw';
import { beforeEach, describe, expect, test } from 'vitest';
import { createCategorySearchOptionsMock } from '../../shared/mocks/category-search-options.mock.spec';
import { createSetupConfigMock } from '../../shared/mocks/configuration.mock.spec';
import { mockRequest } from '../../shared/mocks/mock-request.mock.spec';
import { createSearchResponseMock } from '../../shared/mocks/search-response.mock.spec';
import type { SetupConfiguration } from '../../shared/types/configuration.type';
import type { CategorySearchOptions } from './category-search';
import { categorySearch } from './category-search';

describe('Category Search API', () => {
  let config: SetupConfiguration;
  let searchOptions: CategorySearchOptions;

  beforeEach(() => {
    config = createSetupConfigMock();
    searchOptions = createCategorySearchOptionsMock({
      q: `cat${faker.string.numeric(4)}`,
    });
  });

  test('request and search type', async () => {
    const expectedRequestType = 'search';
    const expectedSearchType = 'category';

    await mockRequest(config, categorySearch, searchOptions, [
      http.get(config.productSearchEndpoint, ({ request }) => {
        const { searchParams } = new URL(request.url);

        expect(searchParams.get('request_type')).toEqual(expectedRequestType);
        expect(searchParams.get('search_type')).toEqual(expectedSearchType);

        return HttpResponse.json(createSearchResponseMock());
      }),
    ]);
  });

  test('response contents', async () => {
    await mockRequest(
      config,
      categorySearch,
      searchOptions,
      [
        http.get(config.productSearchEndpoint, () => {
          return HttpResponse.json(createSearchResponseMock());
        }),
      ],
      ({ response }) => {
        expect(response?.numFound).toBeGreaterThan(0);
        expect(response?.docs?.length).toBeGreaterThan(0);
      },
    );
  });
});
