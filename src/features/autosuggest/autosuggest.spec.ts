import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createAutosuggestOptionsMock } from '../../shared/mocks/autosuggest-options.mock';
import { createSetupConfigMock } from '../../shared/mocks/configuration.mock';
import { mockRequest } from '../../shared/mocks/mock-request.mock';
import { createSuggestResponseMock } from '../../shared/mocks/suggest-response.mock';
import { autoSuggest } from './autosuggest';

describe('Autosuggest API', () => {
  const config = createSetupConfigMock();
  const searchOptions = createAutosuggestOptionsMock();

  test('request and search type', async () => {
    const expectedRequestType = 'suggest';

    await mockRequest(config, autoSuggest, searchOptions, [
      http.get(config.suggestEndpoint, ({ request }) => {
        const { searchParams } = new URL(request.url);

        expect(searchParams.get('request_type')).toEqual(expectedRequestType);

        return HttpResponse.json(createSuggestResponseMock());
      }),
    ]);
  });
});
