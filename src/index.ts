import { SearchRequestParameters } from './types/search-request.type';
import { SearchResponse } from './types/search-response.type';
import { endpointProductSearchApi } from './utils/constants';

function buildApiUrl(base: string, params: SearchRequestParameters): URL {
  const url = new URL(base);

  url.search = Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');

  return url;
}

export async function searchProductsAndCategories(
  params: SearchRequestParameters,
): Promise<SearchResponse> {
  const url = buildApiUrl(endpointProductSearchApi, params);
  return fetch(url).then((data) => data.json());
}
