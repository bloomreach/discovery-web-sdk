import type { Configuration } from '../../../shared/configuration.type';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { logAPICall } from '../../../shared/logger';
import { buildApiUrl } from '../../../shared/url-builders';
import type { SearchRequestParameters } from '../search-request.type';
import type { SearchResponse } from '../search-response.type';
import { CategorySearchFixedOptions } from './category-search-fixed-options.type';
import type { CategorySearchOptions } from './category-search-options.type';

const FIXED_OPTIONS: CategorySearchFixedOptions = {
  request_type: 'search',
  search_type: 'category',
};

export function isCategorySearchOptions(
  options: Record<string, any>,
): options is CategorySearchOptions {
  return Object.entries(FIXED_OPTIONS).every(([key, value]) => options[key] === value);
}

/**
 * Performs a category search using the provided configuration and options.
 */
export async function categorySearch(
  configuration: Configuration,
  options: CategorySearchOptions,
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

  logAPICall('categorySearch', configuration, options, FIXED_OPTIONS, defaults, queryParams, url);

  const data = await fetch(url);
  return data.json() as Promise<SearchResponse>;
}
