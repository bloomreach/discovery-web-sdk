import { getConfig } from '../../../shared/config';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { buildApiUrl } from '../../../shared/url-builders';
import type { SearchRequestParameters } from '../search-request.type';
import type { SearchResponse } from '../search-response.type';

export type CategorySearchOptions = Omit<
  SearchRequestParameters,
  | SearchRequestParameters['account_id']
  | NonNullable<SearchRequestParameters['auth_key']>
  | NonNullable<SearchRequestParameters['domain_key']>
  | NonNullable<SearchRequestParameters['view_id']>
  | SearchRequestParameters['request_type']
  | SearchRequestParameters['search_type']
>;

export async function categorySearch(params: CategorySearchOptions): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = getConfig();
  const defaults = {
    request_type: 'search',
    search_type: 'category',
    'facet.version': '3.0',
    fl: 'pid',
    start: 0,
  };

  const queryParams = Object.assign(config, defaults, params) as SearchRequestParameters;

  const url = buildApiUrl(searchEndpoint || SEARCH_ENDPOINT_PROD, queryParams);
  return fetch(url).then((data) => data.json());
}
