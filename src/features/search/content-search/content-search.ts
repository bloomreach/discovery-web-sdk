import { getConfig } from '../../../shared/config';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { buildApiUrl } from '../../../shared/url-builders';
import type { ContentSearchRequestParameters } from '../search-request.type';
import type { SearchResponse } from '../search-response.type';

export type ContentSearchOptions = Omit<
  ContentSearchRequestParameters,
  | ContentSearchRequestParameters['account_id']
  | NonNullable<ContentSearchRequestParameters['auth_key']>
  | NonNullable<ContentSearchRequestParameters['domain_key']>
  | NonNullable<ContentSearchRequestParameters['view_id']>
  | ContentSearchRequestParameters['request_type']
  | ContentSearchRequestParameters['search_type']
>;

export async function contentSearch(params: ContentSearchOptions): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = getConfig();
  const defaults = {
    request_type: 'search',
    search_type: 'keyword',
    'facet.version': '3.0',
    fl: 'item_id',
    start: 0,
  };

  const queryParams = Object.assign(config, defaults, params) as ContentSearchRequestParameters;

  const url = buildApiUrl(searchEndpoint || SEARCH_ENDPOINT_PROD, queryParams);
  return fetch(url).then((data) => data.json());
}
