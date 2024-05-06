export interface QueryParameters {
  /**
   * Partial search query
   */
  q: string;

  /**
   * Filtered list of attributes you want returned in your API response (i.e. productID, price).
   * Multiple values should be comma separated
   * All fl parameters for Product Search or Category requests must include pid as one of their value
   */
  fl: string;

  /**
   * The number of the first item on a page of results.
   * For example, the first item on the first page is 0, making the start value also 0.
   * The maximum value is 10000.
   */
  start: number;

  /**
   * The number of matching items to return per results page in the API response.
   * The maximum value is 200.
   */
  rows: number;

  'facet.version'?: '3.0';

  /**
   * Return a count of ranged facets, such as price and sale price. Use numeric attributes only.
   * You need to parse the values that are in the facets_counts section of the response.
   */
  'facet.range'?: string;

  /**
   * The fq parameter applies a faceted filter to the returned products,
   * searching for products that fit your parameter values.
   * Use fq=store_lat_lon to enable filtering by distance for BOPIS.
   */
  fq?: string;

  /**
   * Extends the filtered query and applies a complex boolean filter to search results to include or exclude items that fit your parameter values.
   * Any product attribute in your product feed is valid, such as brand names and sizes.
   */
  efq?: string;

  /**
   * The latitude-longitude of the end-customer used for the Buy Online Pick-up In Store (BOPIS) feature.
   * Value should be provided as latitude,longitude. For example, ll=11.09,10.018.
   */
  ll?: string;
}

