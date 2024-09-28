import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createSetupConfigMock } from '../../shared/configuration.mock';
import { SUGGEST_ENDPOINT_PROD } from '../../shared/constants';
import { mockRequest } from '../../shared/mock-request.mock';
import { autoSuggest } from './autosuggest';
import { createAutosuggestOptionsMock } from './autosuggest-options.mock';
import { createSuggestResponseMock } from './suggest-response.mock';
import { faker } from '@faker-js/faker';

describe('Autosuggest API', () => {
  const q = faker.commerce.productName();
  const config = createSetupConfigMock();
  const searchOptions = createAutosuggestOptionsMock();

  test('checks that config and searchOptions are added to the searchParams in the request URL', async () => {
    let searchParams: URLSearchParams;

    await mockRequest(
      autoSuggest,
      [q, config, searchOptions],
      [
        http.get(config.suggestEndpoint, ({ request }) => {
          searchParams = new URL(request.url).searchParams;
          return HttpResponse.json(createSuggestResponseMock());
        }),
      ],
      () => {
        const { account_id, domain_key } = config;
        const { catalog_views, _br_uid_2, url } = searchOptions;

        Object.entries({
          q,
          account_id,
          domain_key,
          catalog_views,
          _br_uid_2,
          url,
        }).forEach(([key, value]) => {
          expect(searchParams.get(key)).toEqual(String(value));
        });
      },
    );
  });

  test('uses SUGGEST_ENDPOINT_PROD when suggestEndpoint is not provided', async () => {
    const configWithoutEndpoint = { ...config, suggestEndpoint: undefined };

    await mockRequest(
      autoSuggest,
      [q, configWithoutEndpoint, searchOptions],
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
