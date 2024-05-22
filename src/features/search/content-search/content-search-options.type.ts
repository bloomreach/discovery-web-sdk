import type { ContentSearchRequestParameters } from '../search-request.type';

export type ContentSearchOptions = Omit<
  ContentSearchRequestParameters,
  | ContentSearchRequestParameters['account_id']
  | NonNullable<ContentSearchRequestParameters['auth_key']>
  | NonNullable<ContentSearchRequestParameters['domain_key']>
  | NonNullable<ContentSearchRequestParameters['view_id']>
  | ContentSearchRequestParameters['request_type']
  | ContentSearchRequestParameters['search_type']
>;


