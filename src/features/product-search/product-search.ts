import { getConfig } from '../../shared/config';
import {
  AccountParameters,
  CatalogParameters,
  SearchRequestParameters,
} from '../../shared/search-request.type';
import { SearchResponse } from '../../shared/search-response.type';
import { buildApiUrl } from '../../shared/url-builders';

export type SearchOptions = Omit<
  SearchRequestParameters,
  keyof AccountParameters | keyof CatalogParameters
>;

export async function searchProducts(params: SearchOptions): Promise<SearchResponse> {
  const config = getConfig();
  const queryParams = Object.assign(config, params);

  const url = buildApiUrl(config.endpoint, queryParams);
  return fetch(url).then((data) => data.json());
}
