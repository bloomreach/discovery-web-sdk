export interface SearchRequestParameters {
  [key: string]: any;

  /**
   * Account ID
   */
  account_id: number;

  /**
   * Authentication Key
   */
  auth_key?: string;

  /**
   * First Party cookie that provides unique identifier
   */
  _br_uid_2: string;

  /**
   * Site domain ID which is provided by Bloomreach
   */
  domain_key: string;

  /**
   * Filtered list of attributes you want returned in your API response (i.e. productID, price).
   * Multiple values should be comma separated
   * All fl parameters for Product Search or Category requests must include pid as one of their value
   */
  fl: string;

  /**
   * Partial search query
   */
  q: string;

  /**
   * URL of the page or HTTP referrer where request started
   */
  ref_url?: string;

  /**
   * ID to track site visitor clicks
   */
  request_id?: number;

  /**
   * The type of API request. Value should be search for Product & Category Search.
   * @default search
   */
  request_type: string;

  /**
   * The number of matching items to return per results page in the API response.
   * The maximum value is 200.
   */
  rows?: number;

  /**
   * The type of search. Value should be "keyword" for Product Search requests, category for "Category" requests.
   * @default keyword
   */
  search_type: string;

  /**
   * The number of the first item on a page of results.
   * For example, the first item on the first page is 0, making the start value also 0.
   * The maximum value is 10000.
   * @default 0
   */
  start: number;

  /**
   *
   * Absolute URL of the page where the request initiated
   */
  url: string;

  /**
   * Indicates whether data wrapped in the function for CORS requests
   */
  callback?: string;

  /**
   * Extends the filtered query and applies a complex boolean filter to search results to include or exclude items that fit your parameter values.
   * Any product attribute in your product feed is valid, such as brand names and sizes.
   */
  efq?: string;

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
   * The latitude-longitude of the end-customer used for the Buy Online Pick-up In Store (BOPIS) feature.
   * Value should be provided as latitude,longitude. For example, ll=11.09,10.018.
   */
  ll?: string;

  /**
   * Sorts results based on the field value in ascending, descending, or another combination of orders.
   * You can sort any fl field.
   * Value is a field name, followed by asc/desc for ascending/descending order respectively.
   */
  sort?: string;

  /**
   * This parameter allows you to display the maximum and minimum values of any numeric field in your data set for a user query.
   * With this parameter, you can get all the documents matching a query and display the minimum and maximum values of single-valued,
   * numeric attributes such as price, sale_price, length, width, reviews, etc.
   */
  'stats.field'?: string;

  /**
   * The universal customer ID of the user. You only need to pass this field if your particular integration tracks customers this way.
   * The parameter captures user IDs from the customer side, and reuses the information when powering apps or enhancing cross-device linking. In this way,
   * Bloomreach recognizes users in a way that's aligned with your system. Use an anonymous string. Don't use email or other personally identifiable information.
   * If you do not track users this way, then omit this field.
   */
  user_id?: string;

  /**
   * A unique identifier for a specific view of your product catalog.
   * If you have multiple versions of your site, each with their own product catalog characteristics like product titles and prices,
   * then add view_id to your call.
   * Bloomreach uses your view_id parameter value to display the right product information for your customers based on their individual site views.
   * You can enter any string value to identify the specific site catalog view. This string must be consistent in your pixel, API, and product catalog.
   */
  view_id?: string;

  /**
   * A customer segmentation parameter
   */
  brSeg?: string;

  /**
   * A customer segmentation parameter
   */
  segment?: string;

  /**
   * A customer segmentation parameter
   */
  cdp_segments?: string;

  /**
   * Determines how to group the results.
   */
  groupby?: string;

  /**
   * Number of items in a group when grouping parameter exists.
   */
  group_limit?: number;
}
