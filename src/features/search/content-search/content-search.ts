import { getConfig } from '../../../shared/config';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { buildApiUrl } from '../../../shared/url-builders';
import type { ContentSearchRequestParameters } from '../search-request.type';
import type { SearchResponse } from '../search-response.type';
import type { ContentSearchOptions } from './content-search-options.type';

export async function contentSearch(params: ContentSearchOptions): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = getConfig();
  const defaults: Partial<ContentSearchRequestParameters> = {
    request_type: 'search',
    search_type: 'keyword',
    'facet.version': '3.0',
    fl: 'item_id',
    start: 0,
  };

  const queryParams = Object.assign(config, defaults, params);

  const url = buildApiUrl(searchEndpoint || SEARCH_ENDPOINT_PROD, queryParams);
  const data = await fetch(url);
  return data.json();
}
