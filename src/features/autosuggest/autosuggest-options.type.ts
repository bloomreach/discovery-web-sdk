import type { SuggestRequestParameters } from './suggest-request.type';

export type AutosuggestOptions = Omit<
  SuggestRequestParameters,
  SuggestRequestParameters['account_id'] | SuggestRequestParameters['request_type']
>;


