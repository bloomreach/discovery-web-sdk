import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createSetupConfigMock } from '../../shared/mocks/configuration.mock';
import { mockRequest } from '../../shared/mocks/mock-request.mock';
import { createProductSearchOptionsMock } from '../../shared/mocks/product-search-options.mock';
import { createSearchResponseMock } from '../../shared/mocks/search-response.mock';
import { productSearch } from './product-search';

describe('Product Search API', () => {
  const config = createSetupConfigMock();
  const searchOptions = createProductSearchOptionsMock();

  test('request and search type', async () => {
    const expectedRequestType = 'search';
    const expectedSearchType = 'keyword';

    await mockRequest(config, productSearch, searchOptions, [
      http.get(config.searchEndpoint, ({ request }) => {
        const { searchParams } = new URL(request.url);

        expect(searchParams.get('request_type')).toEqual(expectedRequestType);
        expect(searchParams.get('search_type')).toEqual(expectedSearchType);

        return HttpResponse.json(createSearchResponseMock());
      }),
    ]);
  });
});
