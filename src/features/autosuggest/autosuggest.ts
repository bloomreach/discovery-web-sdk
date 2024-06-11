import type { Configuration } from '../../shared/configuration.type';
import { SUGGEST_ENDPOINT_PROD } from '../../shared/constants';
import { buildApiUrl } from '../../shared/url-builders';
import type { AutosuggestOptions } from './autosuggest-options.type';
import type { SuggestRequestParameters } from './suggest-request.type';
import type { SuggestResponse } from './suggest-response.type';

/**
 * Retrieves suggestions for the current input using the provided configuration and options.
 */
export async function autoSuggest(
  configuration: Configuration,
  options: AutosuggestOptions,
): Promise<SuggestResponse> {
  const { suggestEndpoint, ...config } = configuration;
  const defaults: Partial<SuggestRequestParameters> = {
    request_type: 'suggest',
  };
  const queryParams = Object.assign(config, defaults, options);
  const url = buildApiUrl(suggestEndpoint || SUGGEST_ENDPOINT_PROD, queryParams);

  const data = await fetch(url);
  return data.json();
}
