import { HttpResponse, http } from 'msw';
import { beforeEach, describe, expect, test } from 'vitest';
import { createSetupConfigMock } from '../../shared/mocks/configuration.mock.spec';
import { mockRequest } from '../../shared/mocks/mock-request.mock.spec';
import { createProductSearchOptionsMock } from '../../shared/mocks/product-search-options.mock.spec';
import { createSearchResponseMock } from '../../shared/mocks/search-response.mock.spec';
import type { SetupConfiguration } from '../../shared/types/configuration.type';
import type { ProductSearchOptions } from './product-search';
import { productSearch } from './product-search';

describe('Product Search API', () => {
  let config: SetupConfiguration;
  let searchOptions: ProductSearchOptions;

  beforeEach(() => {
    config = createSetupConfigMock();
    searchOptions = createProductSearchOptionsMock();
  });

  test('request and search type', async () => {
    const expectedRequestType = 'search';
    const expectedSearchType = 'keyword';

    await mockRequest(config, productSearch, searchOptions, [
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
      productSearch,
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
