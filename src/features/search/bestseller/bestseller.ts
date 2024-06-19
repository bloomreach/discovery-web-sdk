import type { Configuration } from '../../../shared/configuration.type';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { logAPICall } from '../../../shared/logger';
import { buildApiUrl } from '../../../shared/url-builders';
import type { SearchFixedOptions } from '../search-fixed-options.type';
import type { SearchRequestParameters } from '../search-request.type';
import type { SearchResponse } from '../search-response.type';
import type { BestsellerOptions } from './bestseller-options.type';

/**
 * Fetches the bestseller products based on the provided configuration and options.
 */
export async function bestseller(
  configuration: Configuration,
  options: BestsellerOptions,
): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = configuration;
  const fixed: SearchFixedOptions = {
    request_type: 'search',
    search_type: 'bestseller',
    'facet.version': '3.0',
  };
  const defaults: Partial<SearchRequestParameters> = {
    fl: 'pid',
    start: 0,
  };

  const queryParams = Object.assign(config, fixed, defaults, options);
  const url = buildApiUrl(searchEndpoint || SEARCH_ENDPOINT_PROD, queryParams);

  logAPICall('bestseller', configuration, options, fixed, defaults, queryParams, url);

  const data = await fetch(url);
  return data.json();
}
