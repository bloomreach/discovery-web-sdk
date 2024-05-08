export interface SuggestResponseQueryContext {
  originalQuery?: string;
}

export interface SuggestResponseQuerySuggestions {
  query: string;
  displayText: string;
}

export interface SuggestResponseSearchSuggestions {
  sale_price: string;
  url: string;
  pid: string;
  thumb_image: string;
  title: string;
}

export interface SuggestResponseAttributeSuggestions {
  name: string;
  value: string;
  attributeType: string;
}

export interface SuggestResponseSuggestionGroups {
  querySuggestions?: SuggestResponseQuerySuggestions[];
  searchSuggestions?: SuggestResponseSearchSuggestions[];
  attributeSuggestions?: SuggestResponseAttributeSuggestions[];
  catalogName?: string;
  view?: string;
  product_suggest_query?: string;
}

export interface SuggestResponse {
  queryContext?: SuggestResponseQueryContext;
  suggestionGroups?: SuggestResponseSuggestionGroups[];
}
