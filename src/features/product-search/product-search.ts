import { buildApiUrl } from '../../shared/utils/url-builders';
import { SearchRequestParameters } from '../../types/search-request.type';
import { SearchResponse } from '../../types/search-response.type';
import { endpointProductSearchApi } from '../../shared/utils/constants';

export async function searchProducts(
  params: SearchRequestParameters,
): Promise<SearchResponse> {
  const url = buildApiUrl(endpointProductSearchApi, params);
  return fetch(url).then((data) => data.json());
}

