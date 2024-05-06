import { HttpResponse, http } from 'msw';
import { beforeEach, describe, expect, test } from 'vitest';
import { createBestsellerOptionsMock } from '../../shared/mocks/bestseller-options.mock';
import { createSetupConfigMock } from '../../shared/mocks/configuration.mock';
import { mockRequest } from '../../shared/mocks/mock-request.mock';
import { createSearchResponseMock } from '../../shared/mocks/search-response.mock';
import type { SetupConfiguration } from '../../shared/types/configuration.type';
import type { BestsellerOptions } from './bestseller';
import { bestseller } from './bestseller';

describe('Category Search API', () => {
  let config: SetupConfiguration;
  let searchOptions: BestsellerOptions;

  beforeEach(() => {
    config = createSetupConfigMock();
    searchOptions = createBestsellerOptionsMock();
  });

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
