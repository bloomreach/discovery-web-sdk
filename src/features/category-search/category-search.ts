import type { AccountParameters } from '../../shared/types/account-params.type';
import type { CallTypeParameters } from '../../shared/types/calltype-params.type';
import type { CatalogParameters } from '../../shared/types/catalog-params.type';
import type { SearchRequestParameters } from '../../shared/types/search-request.type';
import type { SearchResponse } from '../../shared/types/search-response.type';
import { buildApiUrl } from '../../shared/url-builders';
import { getConfig } from '../../shared/config';
import { SEARCH_ENDPOINT_PROD } from '../../shared/constants';

export type CategorySearchOptions = Omit<
  SearchRequestParameters,
  keyof AccountParameters | keyof CatalogParameters | keyof CallTypeParameters
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
