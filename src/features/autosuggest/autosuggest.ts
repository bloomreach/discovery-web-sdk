import type { Configuration } from '../../shared/configuration.type';
import { SUGGEST_ENDPOINT_PROD } from '../../shared/constants';
import { logAPICall } from '../../shared/logger';
import { typedFetch } from '../../shared/typed-fetch';
import { buildApiUrl } from '../../shared/url-builders';
import type { AutosuggestOptions } from './autosuggest-options.type';
import type { SuggestFixedOptions } from './suggest-fixed-options.type';
import type { SuggestRequestParameters } from './suggest-request.type';
import type { SuggestResponse } from './suggest-response.type';

const FIXED_OPTIONS: SuggestFixedOptions = {
  request_type: 'suggest',
};

export function isAutosuggestOptions(options: Record<string, any>): options is AutosuggestOptions {
  return Object.entries(FIXED_OPTIONS).every(([key, value]) => options[key] === value);
}

/**
 * Retrieves suggestions for the current input using the provided configuration and options.
 */
export async function autoSuggest(
  configuration: Configuration,
  options: AutosuggestOptions,
): Promise<SuggestResponse> {
  const { suggestEndpoint, ...config } = configuration;
  const defaults: Partial<SuggestRequestParameters> = {};
  const queryParams: SuggestRequestParameters = Object.assign(
    config,
    defaults,
    options,
    FIXED_OPTIONS,
  );
  const url = buildApiUrl(suggestEndpoint || SUGGEST_ENDPOINT_PROD, queryParams);

  logAPICall('autoSuggest', configuration, options, FIXED_OPTIONS, defaults, queryParams, url);

  return typedFetch<SuggestResponse>(url);
}
