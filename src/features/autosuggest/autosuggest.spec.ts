import { HttpResponse, http } from 'msw';
import { describe, expect, test, vi } from 'vitest';
import { createSetupConfigMock } from '../../shared/configuration.mock';
import { SUGGEST_ENDPOINT_PROD } from '../../shared/constants';
import { mockRequest } from '../../shared/mock-request.mock';
import { autoSuggest } from './autosuggest';
import { createAutosuggestOptionsMock } from './autosuggest-options.mock';
import { createSuggestResponseMock } from './suggest-response.mock';

describe('Autosuggest API', () => {
  const config = createSetupConfigMock();
  const searchOptions = createAutosuggestOptionsMock();

  test('checks that config and searchOptions are added to the searchParams in the request URL', async () => {
    let searchParams: URLSearchParams;

    await mockRequest(
      autoSuggest,
      [config, searchOptions],
      [
        http.get(config.suggestEndpoint, ({ request }) => {
          searchParams = new URL(request.url).searchParams;
          return HttpResponse.json(createSuggestResponseMock());
        }),
      ],
      () => {
        const { account_id, domain_key } = config;
        const { q, catalog_views, _br_uid_2, url } = searchOptions;

        Object.entries({
          ...{ account_id, domain_key },
          ...{ q, catalog_views, _br_uid_2, url },
          request_type: 'suggest',
        }).forEach(([key, value]) => {
          expect(searchParams.get(key)).toEqual(String(value));
        });
      },
    );
  });

  test('logs correct output when debug is enabled', async () => {
    const debugConfig = { ...config, debug: true };
    vi.spyOn(console, 'log').mockImplementation(() => {});

    await mockRequest(
      autoSuggest,
      [debugConfig, searchOptions],
      [
        http.get(debugConfig.suggestEndpoint, () => {
          return HttpResponse.json(createSuggestResponseMock());
        }),
      ],
    );

    expect(console.log).toHaveBeenCalledWith("[BR] 'autoSuggest' called with:");
    expect(console.log).toHaveBeenCalledWith('[BR] Configuration:', debugConfig);
    expect(console.log).toHaveBeenCalledWith('[BR] Options:', searchOptions);
    expect(console.log).toHaveBeenCalledWith('[BR] Fixed options:', { request_type: 'suggest' });
    expect(console.log).toHaveBeenCalledWith('[BR] Default options:', {});
    expect(console.log).toHaveBeenCalledWith('[BR] Merged queryParams:', expect.anything());
    expect(console.log).toHaveBeenCalledWith('[BR] Fetching url:', expect.anything());

    vi.restoreAllMocks();
  });

  test('uses SUGGEST_ENDPOINT_PROD when suggestEndpoint is not provided', async () => {
    const configWithoutEndpoint = { ...config, suggestEndpoint: undefined };

    await mockRequest(
      autoSuggest,
      [configWithoutEndpoint, searchOptions],
      [
        http.get(SUGGEST_ENDPOINT_PROD, () => {
          return HttpResponse.json(createSuggestResponseMock());
        }),
      ],
    );

    // Expectation: If the function processes without throwing errors and reaches the mock,
    // it means SUGGEST_ENDPOINT_PROD was used as intended.
  });
});
