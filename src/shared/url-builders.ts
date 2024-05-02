import { SearchRequestParameters } from './search-request.type';

const noEncodeParameters = ['_br_uid_2', 'fq', 'sort'];

export function buildApiUrl(base: string, params: SearchRequestParameters): URL {
  const url = new URL(base);

  url.search = Object.entries(params)
    .map(([key, value]) => {
      return `${key}=${noEncodeParameters.includes(key) ? value : encodeURIComponent(value)}`;
    })
    .join('&');

  return url;
}
