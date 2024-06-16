/**
 * Query parameters that are fixed by the SDK and are not set by consumers
 */
export interface SuggestFixedOptions {
  /**
   * The type of API request. Value should be search for Product & Category Search.
   */
  request_type: 'suggest';
}
