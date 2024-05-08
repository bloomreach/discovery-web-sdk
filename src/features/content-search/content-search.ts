import { getConfig } from '../../shared/config';
import { SEARCH_ENDPOINT_PROD } from '../../shared/constants';
import type { AccountParameters } from '../../shared/types/account-params.type';
import type { CallTypeParameters } from '../../shared/types/calltype-params.type';
import type { CatalogParameters } from '../../shared/types/catalog-params.type';
import type { ContentSearchRequestParameters } from '../../shared/types/search-request.type';
import type { SearchResponse } from '../../shared/types/search-response.type';
import { buildApiUrl } from '../../shared/url-builders';

export type ContentSearchOptions = Omit<
  ContentSearchRequestParameters,
  keyof AccountParameters | keyof CatalogParameters | keyof CallTypeParameters
>;

export async function contentSearch(params: ContentSearchOptions): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = getConfig();
  const defaults = {
    request_type: 'search',
    search_type: 'keyword',
    'facet.version': '3.0',
    fl: 'pid',
    start: 0,
  };

  const queryParams = Object.assign(config, defaults, params) as ContentSearchRequestParameters;

  const url = buildApiUrl(searchEndpoint || SEARCH_ENDPOINT_PROD, queryParams);
  return fetch(url).then((data) => data.json());
}
