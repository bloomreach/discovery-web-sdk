import { getConfig } from '../../../shared/config';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { buildApiUrl } from '../../../shared/url-builders';
import type { SearchRequestParameters } from '../search-request.type';
import type { SearchResponse } from '../search-response.type';
import type { CategorySearchOptions } from './category-search-options.type';

export async function categorySearch(params: CategorySearchOptions): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = getConfig();
  const defaults: Partial<SearchRequestParameters> = {
    request_type: 'search',
    search_type: 'category',
    'facet.version': '3.0',
    fl: 'pid',
    start: 0,
  };

  const queryParams = Object.assign(config, defaults, params);

  const url = buildApiUrl(searchEndpoint || SEARCH_ENDPOINT_PROD, queryParams);
  const data = await fetch(url);
  return data.json();
}
