import { getConfig } from '../../shared/config';
import {
  AccountParameters,
  CallTypeParameters,
  CatalogParameters,
  SearchRequestParameters,
} from '../../shared/search-request.type';
import { SearchResponse } from '../../shared/search-response.type';
import { buildApiUrl } from '../../shared/url-builders';

export type SearchOptions = Omit<
  SearchRequestParameters,
  keyof AccountParameters | keyof CatalogParameters | keyof CallTypeParameters
>;

export async function searchProducts(params: SearchOptions): Promise<SearchResponse> {
  const { productSearchEndpoint, account_id, domain_key, auth_key, view_id } = getConfig();
  const defaults = {
    account_id,
    domain_key,
    auth_key,
    view_id,
    request_type: 'search',
    search_type: 'keyword',
  };

  const queryParams = Object.assign(defaults, params);

  const url = buildApiUrl(productSearchEndpoint, queryParams);
  return fetch(url).then((data) => data.json());
}
