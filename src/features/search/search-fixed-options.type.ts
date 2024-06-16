/**
 * Query parameters that are fixed by the SDK and are not set by consumers
 */
export interface SearchFixedOptions {
  /**
   * The type of API request. Value should be search for Product & Category Search.
   */
  request_type: 'search' | 'suggest';

  /**
   * The type of search. Value should be "keyword" for Product Search requests, category for "Category" requests.
   */
  search_type: 'keyword' | 'category' | 'bestseller';

  /**
   * Facet version, this SDK only supports version 3.0
   */
  'facet.version': '3.0';
}
