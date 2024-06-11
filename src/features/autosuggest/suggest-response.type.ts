/**
 * Response object for a suggest API call.
 */
export interface SuggestResponseQueryContext {
  originalQuery?: string;
}

/**
 * Query suggestions in the suggest response.
 */
export interface SuggestResponseQuerySuggestions {
  query: string;
  displayText: string;
}

/**
 * Search suggestions in the suggest response.
 */
export interface SuggestResponseSearchSuggestions {
  sale_price: string;
  url: string;
  pid: string;
  thumb_image: string;
  title: string;
}

/**
 * Attribute suggestions in the suggest response.
 */
export interface SuggestResponseAttributeSuggestions {
  name: string;
  value: string;
  attributeType: string;
}

/**
 * Suggestion groups in the suggest response.
 */
export interface SuggestResponseSuggestionGroups {
  querySuggestions?: SuggestResponseQuerySuggestions[];
  searchSuggestions?: SuggestResponseSearchSuggestions[];
  attributeSuggestions?: SuggestResponseAttributeSuggestions[];
  catalogName?: string;
  view?: string;
  product_suggest_query?: string;
}

/**
 * Suggest response object.
 */
export interface SuggestResponse {
  queryContext?: SuggestResponseQueryContext;
  suggestionGroups?: SuggestResponseSuggestionGroups[];
}
