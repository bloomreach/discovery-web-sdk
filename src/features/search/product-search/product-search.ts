import type { Configuration } from '../../../shared/configuration.type';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { logAPICall } from '../../../shared/logger';
import { buildApiUrl } from '../../../shared/url-builders';
import { SearchRequestParameters } from '../search-request.type';
import type { SearchResponse } from '../search-response.type';
import { ProductSearchFixedOptions } from './product-search-fixed-options.type';
import type { ProductSearchOptions } from './product-search-options.type';

const FIXED_OPTIONS: ProductSearchFixedOptions = {
  request_type: 'search',
  search_type: 'keyword',
};

export function isProductSearchOptions(
  options: Record<string, any>,
): options is ProductSearchOptions {
  return Object.entries(FIXED_OPTIONS).every(([key, value]) => options[key] === value);
}

/**
 * Performs a product search using the provided configuration and options.
 */
export async function productSearch(
  configuration: Configuration,
  options: ProductSearchOptions,
): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = configuration;
  const defaults: Partial<ProductSearchOptions> = {
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

  logAPICall('productSearch', configuration, options, FIXED_OPTIONS, defaults, queryParams, url);

  const data = await fetch(url);
  return data.json() as Promise<SearchResponse>;
}
