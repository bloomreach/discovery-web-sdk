import type { Configuration } from '../../shared/configuration.type';
import { SUGGEST_ENDPOINT_PROD } from '../../shared/constants';
import { logAPICall } from '../../shared/logger';
import { buildApiUrl } from '../../shared/url-builders';
import type { AutosuggestOptions } from './autosuggest-options.type';
import type { SuggestFixedOptions } from './suggest-fixed-options.type';
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
  const fixed: SuggestFixedOptions = {
    request_type: 'suggest',
  };
  const defaults: Partial<SuggestRequestParameters> = {};
  const queryParams = Object.assign(config, fixed, defaults, options);
  const url = buildApiUrl(suggestEndpoint || SUGGEST_ENDPOINT_PROD, queryParams);

  logAPICall('autoSuggest', configuration, options, fixed, defaults, queryParams, url);

  const data = await fetch(url);
  return data.json() as Promise<SuggestResponse>;
}
