import type { Configuration } from '../../../shared/configuration.type';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { logAPICall } from '../../../shared/logger';
import { buildApiUrl } from '../../../shared/url-builders';
import type { SearchFixedOptions } from '../search-fixed-options.type';
import type { SearchResponse } from '../search-response.type';
import type { ProductSearchOptions } from './product-search-options.type';

/**
 * Performs a product search using the provided configuration and options.
 */
export async function productSearch(
  configuration: Configuration,
  options: ProductSearchOptions,
): Promise<SearchResponse> {
  const { searchEndpoint, debug, ...config } = configuration;
  const fixed: SearchFixedOptions = {
    request_type: 'search',
    search_type: 'keyword',
    'facet.version': '3.0',
  };
  const defaults: Partial<ProductSearchOptions> = {
    fl: 'pid',
    start: 0,
  };

  const queryParams = Object.assign(config, fixed, defaults, options);
  const url = buildApiUrl(searchEndpoint || SEARCH_ENDPOINT_PROD, queryParams);

  if (debug) {
    logAPICall('productSearch', configuration, options, fixed, defaults, queryParams, url);
  }

  const data = await fetch(url);
  return data.json();
}
