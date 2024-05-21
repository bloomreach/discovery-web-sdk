import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createSetupConfigMock } from '../../../initialize/configuration.mock';
import { mockRequest } from '../../../shared/mock-request.mock';
import { createSearchResponseMock } from '../search-response.mock';
import { productSearch } from './product-search';
import { createProductSearchOptionsMock } from './product-search-options.mock';

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
