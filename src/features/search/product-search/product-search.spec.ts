import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createSetupConfigMock } from '../../../shared/configuration.mock';
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
        expect(searchParams.get('request_type')).toEqual(expectedRequestType);
        expect(searchParams.get('search_type')).toEqual(expectedSearchType);
      },
    );
  });
});
