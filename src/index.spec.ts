import { HttpResponse, http } from 'msw';
import { setupServer } from 'msw/node';
import { describe, expect, test } from 'vitest';
import { searchProducts } from './features/product-search/product-search';
import { Configuration, setConfig } from './shared/config';
import { endpointProductSearchApi } from './shared/constants';
import { createSearchRequestParametersMock } from './shared/mocks/search-request.mock';
import { createSearchResponseMock } from './shared/mocks/search-response.mock';

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

    setConfig({
      endpoint: endpointProductSearchApi,
      accountId: 1234,
    } as unknown as Configuration);

    await searchProducts(requestParams);
    server.close();
  });
});
