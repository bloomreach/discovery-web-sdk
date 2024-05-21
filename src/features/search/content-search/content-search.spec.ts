import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createSetupConfigMock } from '../../../initialize/configuration.mock';
import { mockRequest } from '../../../shared/mock-request.mock';
import { createSearchResponseMock } from '../search-response.mock';
import { contentSearch } from './content-search';
import { createContentSearchOptionsMock } from './content-search-options.mock';

describe('Content Search API', () => {
  const config = createSetupConfigMock();
  const searchOptions = createContentSearchOptionsMock();

  test('request and search type', async () => {
    const expectedRequestType = 'search';
    const expectedSearchType = 'keyword';

    await mockRequest(config, contentSearch, searchOptions, [
      http.get(config.searchEndpoint, ({ request }) => {
        const { searchParams } = new URL(request.url);

        expect(searchParams.get('request_type')).toEqual(expectedRequestType);
        expect(searchParams.get('search_type')).toEqual(expectedSearchType);

        return HttpResponse.json(createSearchResponseMock());
      }),
    ]);
  });
});
