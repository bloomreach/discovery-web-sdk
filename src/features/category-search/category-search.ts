import type { AccountParameters } from '../../shared/types/account-params.type';
import type { CallTypeParameters } from '../../shared/types/calltype-params.type';
import type { CatalogParameters } from '../../shared/types/catalog-params.type';
import type { SearchRequestParameters } from '../../shared/types/search-request.type';
import type { SearchResponse } from '../../shared/types/search-response.type';
import { buildApiUrl } from '../../shared/url-builders';
import { getConfig } from '../../shared/config';

export type CategorySearchOptions = Omit<
  SearchRequestParameters,
  keyof AccountParameters | keyof CatalogParameters | keyof CallTypeParameters
>;

export async function categorySearch(params: CategorySearchOptions): Promise<SearchResponse> {
  const { productSearchEndpoint, account_id, domain_key, auth_key, view_id } = getConfig();
  const defaults = {
    account_id,
    domain_key,
    auth_key,
    view_id,
    request_type: 'search',
    search_type: 'category',
  };

  const queryParams = Object.assign(defaults, params);

  const url = buildApiUrl(productSearchEndpoint, queryParams);
  return fetch(url).then((data) => data.json());
}
