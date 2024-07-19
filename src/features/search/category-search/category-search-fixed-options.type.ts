/**
 * Query parameters that are fixed by the SDK and are not set by consumers
 */
export interface CategorySearchFixedOptions {
  /**
   * The type of API request.
   */
  request_type: 'search';

  /**
   * The type of search.
   */
  search_type: 'category';
}
