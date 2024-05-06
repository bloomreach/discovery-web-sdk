export interface CallTypeParameters {
  /**
   * The type of API request. Value should be search for Product & Category Search.
   * @default search
   */
  request_type: 'search' | 'suggest';

  /**
   * The type of search. Value should be "keyword" for Product Search requests, category for "Category" requests.
   * @default keyword
   */
  search_type: 'keyword' | 'category' | 'bestseller';
}


