import type { SearchRequestParameters } from '../search-request.type';

export type ProductSearchOptions = Omit<
  SearchRequestParameters,
  | SearchRequestParameters['account_id']
  | NonNullable<SearchRequestParameters['auth_key']>
  | NonNullable<SearchRequestParameters['domain_key']>
  | NonNullable<SearchRequestParameters['view_id']>
  | SearchRequestParameters['request_type']
  | SearchRequestParameters['search_type']
>;


