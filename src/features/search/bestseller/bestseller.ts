import { getConfig } from '../../../shared/config';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { buildApiUrl } from '../../../shared/url-builders';
import type { SearchResponse } from '../search-response.type';
import type { BestsellerOptions } from './bestseller-options.type';

export async function bestseller(params: BestsellerOptions): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = getConfig();
  const defaults: Partial<BestsellerOptions> = {
    request_type: 'search',
    search_type: 'bestseller',
    'facet.version': '3.0',
    fl: 'pid',
    start: 0,
  };

  const queryParams = Object.assign(config, defaults, params);

  const url = buildApiUrl(searchEndpoint || SEARCH_ENDPOINT_PROD, queryParams);
  const data = await fetch(url);
  return data.json();
}
