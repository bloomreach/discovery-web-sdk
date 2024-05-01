import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { describe, expect, test } from 'vitest';
import { createSearchRequestParametersMock } from '../../mocks/search-request.mock';
import { createSearchResponseMock } from '../../mocks/search-response.mock';
import { endpointProductSearchApi } from '../../shared/utils/constants';
import { searchProducts } from './product-search';

describe('Product Search & Category API', () => {
  test('call to Product Search API with encoded query parameters', async () => {
    const accountId = 1234;
    const query = 'Awesome red boots';
    const fl = 'pid,title,description';

    const handler = http.get(endpointProductSearchApi, ({ request }) => {
      expect(request.url.includes(encodeURIComponent(query))).toBeTruthy();
      expect(request.url.includes(encodeURIComponent(fl))).toBeTruthy();

      return HttpResponse.json(createSearchResponseMock(), { status: 200 });
    });

    const server = setupServer(handler);
    server.listen();

    const requestParams = createSearchRequestParametersMock({
      account_id: accountId,
      q: query,
      fl,
    });

    await searchProducts(requestParams);
    server.close();
  });
});
