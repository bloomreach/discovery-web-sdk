import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createBestsellerOptionsMock } from './bestseller-options.mock';
import { bestseller } from './bestseller';
import { createSetupConfigMock } from '../../../initialize/configuration.mock';
import { mockRequest } from '../../../shared/mock-request.mock';
import { createSearchResponseMock } from '../search-response.mock';

describe('Bestseller API', () => {
  const config = createSetupConfigMock();
  const searchOptions = createBestsellerOptionsMock();

  test('request and search type', async () => {
    const expectedRequestType = 'search';
    const expectedSearchType = 'bestseller';

    await mockRequest(config, bestseller, searchOptions, [
      http.get(config.searchEndpoint, ({ request }) => {
        const { searchParams } = new URL(request.url);

        expect(searchParams.get('request_type')).toEqual(expectedRequestType);
        expect(searchParams.get('search_type')).toEqual(expectedSearchType);

        return HttpResponse.json(createSearchResponseMock());
      }),
    ]);
  });
});