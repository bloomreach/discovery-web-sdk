import { getConfig } from '../../shared/config';
import { SUGGEST_ENDPOINT_PROD } from '../../shared/constants';
import type { AccountParameters } from '../../shared/types/account-params.type';
import type { CallTypeParameters } from '../../shared/types/calltype-params.type';
import type { CatalogParameters } from '../../shared/types/catalog-params.type';
import type { SuggestRequestParameters } from '../../shared/types/suggest-request.type';
import type { SuggestResponse } from '../../shared/types/suggest-response.type';
import { buildApiUrl } from '../../shared/url-builders';

export type AutosuggestOptions = Omit<
  SuggestRequestParameters,
  keyof AccountParameters | keyof CatalogParameters | keyof CallTypeParameters
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
