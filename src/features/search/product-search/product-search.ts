import type { Configuration } from '../../../shared/configuration.type';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import type { FixedOptions } from '../../../shared/fixed-options.type';
import { buildApiUrl } from '../../../shared/url-builders';
import type { SearchResponse } from '../search-response.type';
import type { ProductSearchOptions } from './product-search-options.type';

/**
 * Performs a product search using the provided configuration and options.
 */
export async function productSearch(
  configuration: Configuration,
  options: ProductSearchOptions,
): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = configuration;
  const fixed: FixedOptions = {
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
  const data = await fetch(url);
  return data.json();
}
