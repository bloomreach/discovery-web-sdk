import type { Configuration } from '../../../shared/configuration.type';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { logAPICall } from '../../../shared/logger';
import { typedFetch } from '../../../shared/typed-fetch';
import { buildApiUrl } from '../../../shared/url-builders';
import type { ContentSearchRequestParameters, SearchRequestParameters } from '../search-request.type';
import type { SearchResponse } from '../search-response.type';
import { ContentSearchFixedOptions } from './content-search-fixed-options.type';
import type { ContentSearchOptions } from './content-search-options.type';

const FIXED_OPTIONS: ContentSearchFixedOptions = {
  request_type: 'search',
  search_type: 'keyword',
};

/**
 * Performs a content search using the provided configuration and options.
 */
export async function contentSearch(
  query: SearchRequestParameters['q'],
  configuration: Configuration,
  options: ContentSearchOptions,
): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = configuration;
  const defaults: Partial<ContentSearchRequestParameters> = {
    fl: 'item_id',
    start: 0,
    'facet.version': '3.0',
  };

  const queryParams: ContentSearchRequestParameters = {
    q: query,
    ...config,
    ...defaults,
    ...options,
    ...FIXED_OPTIONS,
  };

  const url = buildApiUrl(searchEndpoint || SEARCH_ENDPOINT_PROD, queryParams);

  logAPICall('contentSearch', configuration, options, FIXED_OPTIONS, defaults, queryParams, url);

  return typedFetch<SearchResponse>(url);
}
