import type { Configuration } from '../../../shared/configuration.type';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { buildApiUrl } from '../../../shared/url-builders';
import type { ContentSearchRequestParameters } from '../search-request.type';
import type { SearchResponse } from '../search-response.type';
import type { ContentSearchOptions } from './content-search-options.type';

/**
 * Performs a content search using the provided configuration and options.
 */
export async function contentSearch(
  configuration: Configuration,
  options: ContentSearchOptions,
): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = configuration;
  const defaults: Partial<ContentSearchRequestParameters> = {
    request_type: 'search',
    search_type: 'keyword',
    'facet.version': '3.0',
    fl: 'item_id',
    start: 0,
  };

  const queryParams = Object.assign(config, defaults, options);

  const url = buildApiUrl(searchEndpoint || SEARCH_ENDPOINT_PROD, queryParams);
  const data = await fetch(url);
  return data.json();
}
