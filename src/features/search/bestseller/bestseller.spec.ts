import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createSetupConfigMock } from '../../../shared/configuration.mock';
import { mockRequest } from '../../../shared/mock-request.mock';
import { createSearchResponseMock } from '../search-response.mock';
import { bestseller } from './bestseller';
import { createBestsellerOptionsMock } from './bestseller-options.mock';

describe('Bestseller API', () => {
  const config = createSetupConfigMock();
  const searchOptions = createBestsellerOptionsMock({
    q: 'testQuery',
  });

  test('request and search type', async () => {
    const expectedRequestType = 'search';
    const expectedSearchType = 'bestseller';
    let searchParams: URLSearchParams;

    await mockRequest(
      bestseller,
      [config, searchOptions],
      [
        http.get(config.searchEndpoint, ({ request }) => {
          searchParams = new URL(request.url).searchParams;
          return HttpResponse.json(createSearchResponseMock());
        }),
      ],
      () => {
        expect(searchParams.get('q')).toBe('testQuery');
        expect(searchParams.get('request_type')).toEqual(expectedRequestType);
        expect(searchParams.get('search_type')).toEqual(expectedSearchType);
      },
    );
  });
});
