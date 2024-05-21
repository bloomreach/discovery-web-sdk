import { getConfig } from '../../shared/config';
import { SUGGEST_ENDPOINT_PROD } from '../../shared/constants';
import { buildApiUrl } from '../../shared/url-builders';
import type { SuggestRequestParameters } from './suggest-request.type';
import type { SuggestResponse } from './suggest-response.type';

export type AutosuggestOptions = Omit<
  SuggestRequestParameters,
  SuggestRequestParameters['account_id'] | SuggestRequestParameters['request_type']
>;

export async function autoSuggest(params: AutosuggestOptions): Promise<SuggestResponse> {
  const { suggestEndpoint, ...config } = getConfig();
  const defaults = {
    request_type: 'suggest',
  };

  const queryParams = Object.assign(config, defaults, params) as SuggestRequestParameters;

  const url = buildApiUrl(suggestEndpoint || SUGGEST_ENDPOINT_PROD, queryParams);
  return fetch(url).then((data) => data.json());
}
