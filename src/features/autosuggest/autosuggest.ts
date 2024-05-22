import { getConfig } from '../../shared/config';
import { SUGGEST_ENDPOINT_PROD } from '../../shared/constants';
import { buildApiUrl } from '../../shared/url-builders';
import type { AutosuggestOptions } from './autosuggest-options.type';
import type { SuggestResponse } from './suggest-response.type';

export async function autoSuggest(params: AutosuggestOptions): Promise<SuggestResponse> {
  const { suggestEndpoint, ...config } = getConfig();
  const defaults: Partial<AutosuggestOptions> = {
    request_type: 'suggest',
  };
  const queryParams = Object.assign(config, defaults, params);
  const url = buildApiUrl(suggestEndpoint || SUGGEST_ENDPOINT_PROD, queryParams);

  return fetch(url).then((data) => data.json());
}
