import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { autoSuggest } from './autosuggest';
import { createSetupConfigMock } from '../../initialize/configuration.mock';
import { createAutosuggestOptionsMock } from './autosuggest-options.mock';
import { mockRequest } from '../../shared/mock-request.mock';
import { createSuggestResponseMock } from './suggest-response.mock';

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
