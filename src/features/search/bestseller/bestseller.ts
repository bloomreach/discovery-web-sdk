import type { Configuration } from '../../../shared/configuration.type';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { logAPICall } from '../../../shared/logger';
import { typedFetch } from '../../../shared/typed-fetch';
import { buildApiUrl } from '../../../shared/url-builders';
import type { SearchRequestParameters } from '../search-request.type';
import type { SearchResponse } from '../search-response.type';
import { BestsellerFixedOptions } from './bestseller-fixed-options.type';
import type { BestsellerOptions } from './bestseller-options.type';

const FIXED_OPTIONS: BestsellerFixedOptions = {
  request_type: 'search',
  search_type: 'bestseller',
};

export function isBestsellerOptions(options: Record<string, any>): options is BestsellerOptions {
  return Object.entries(FIXED_OPTIONS).every(([key, value]) => options[key] === value);
}

/**
 * Fetches the bestseller products based on the provided configuration and options.
 */
export async function bestseller(
  configuration: Configuration,
  options: BestsellerOptions,
): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = configuration;
  const defaults: Partial<SearchRequestParameters> = {
    fl: 'pid',
    start: 0,
    'facet.version': '3.0',
  };

  const queryParams: SearchRequestParameters = Object.assign(
    config,
    defaults,
    options,
    FIXED_OPTIONS,
  );
  const url = buildApiUrl(searchEndpoint || SEARCH_ENDPOINT_PROD, queryParams);

  logAPICall('bestseller', configuration, options, FIXED_OPTIONS, defaults, queryParams, url);

  return typedFetch<SearchResponse>(url);
}
