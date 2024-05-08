import type { SearchRequestParameters } from './types/search-request.type';
import type { SuggestRequestParameters } from './types/suggest-request.type';

const shouldNotBeEncoded = ['_br_uid_2', 'fq', 'sort'];

type RequestParameters = SearchRequestParameters | SuggestRequestParameters;

export function buildApiUrl(base: string, params: RequestParameters): URL {
  const url = new URL(base);

  url.search = Object.entries(params)
    .map(([key, value]) => {
      return `${key}=${shouldNotBeEncoded.includes(key) ? value : encodeURIComponent(value)}`;
    })
    .join('&');

  return url;
}
