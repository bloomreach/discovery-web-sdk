import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createBestsellerOptionsMock } from './bestseller-options.mock';
import { bestseller } from './bestseller';
import { mockRequest } from '../../../shared/mock-request.mock';
import { createSearchResponseMock } from '../search-response.mock';
import { createSetupConfigMock } from '../../../shared/configuration.mock';

describe('Bestseller API', () => {
  const config = createSetupConfigMock();
  const searchOptions = createBestsellerOptionsMock({
    q: 'testQuery',
  });

  test('request and search type', async () => {
    const expectedRequestType = 'search';
    const expectedSearchType = 'bestseller';

    await mockRequest(
      bestseller,
      [config, searchOptions],
      [
        http.get(config.searchEndpoint, ({ request }) => {
          const { searchParams } = new URL(request.url);

          expect(searchParams.get('q')).toBe('testQuery');
          expect(searchParams.get('request_type')).toEqual(expectedRequestType);
          expect(searchParams.get('search_type')).toEqual(expectedSearchType);

          return HttpResponse.json(createSearchResponseMock());
        }),
      ],
    );
  });
});
