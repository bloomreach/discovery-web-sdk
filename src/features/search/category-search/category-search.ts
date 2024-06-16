import type { Configuration } from '../../../shared/configuration.type';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import type { SearchFixedOptions } from '../search-fixed-options.type';
import { buildApiUrl } from '../../../shared/url-builders';
import type { SearchRequestParameters } from '../search-request.type';
import type { SearchResponse } from '../search-response.type';
import type { CategorySearchOptions } from './category-search-options.type';

/**
 * Performs a category search using the provided configuration and options.
 */
export async function categorySearch(
  configuration: Configuration,
  options: CategorySearchOptions,
): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = configuration;
  const fixed: SearchFixedOptions = {
    request_type: 'search',
    search_type: 'category',
    'facet.version': '3.0',
  };
  const defaults: Partial<SearchRequestParameters> = {
    fl: 'pid',
    start: 0,
  };

  const queryParams = Object.assign(config, fixed, defaults, options);

  const url = buildApiUrl(searchEndpoint || SEARCH_ENDPOINT_PROD, queryParams);
  const data = await fetch(url);
  return data.json();
}
