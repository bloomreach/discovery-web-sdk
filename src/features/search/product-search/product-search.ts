import type { Configuration } from '../../../shared/configuration.type';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { logAPICall } from '../../../shared/logger';
import { typedFetch } from '../../../shared/typed-fetch';
import { buildApiUrl } from '../../../shared/url-builders';
import { SearchRequestParameters } from '../search-request.type';
import type { SearchResponse } from '../search-response.type';
import { ProductSearchFixedOptions } from './product-search-fixed-options.type';
import type { ProductSearchOptions } from './product-search-options.type';

const FIXED_OPTIONS: ProductSearchFixedOptions = {
  request_type: 'search',
  search_type: 'keyword',
};

/**
 * Performs a product search using the provided configuration and options.
 */
export async function productSearch(
  query: SearchRequestParameters['q'],
  configuration: Configuration,
  options: ProductSearchOptions,
): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = configuration;
  const defaults: Partial<ProductSearchOptions> = {
    fl: 'pid',
    start: 0,
    'facet.version': '3.0',
  };

  const queryParams: SearchRequestParameters = {
    q: query,
    ...config,
    ...defaults,
    ...options,
    ...FIXED_OPTIONS,
  };

  const url = buildApiUrl(searchEndpoint || SEARCH_ENDPOINT_PROD, queryParams);

  logAPICall('productSearch', configuration, options, FIXED_OPTIONS, defaults, queryParams, url);

  return typedFetch<SearchResponse>(url);
}
