export interface SuggestRequestParameters {
  /**
   * First Party cookie that provides unique identifier
   */
  _br_uid_2: string;

  /**
   * Account ID
   */
  account_id: number;

  /**
   * Indicates whether data wrapped in the function for CORS requests
   */
  callback?: string;

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
  request_type: 'search' | 'suggest';

  /**
   * Sorts results based on the field value in ascending, descending, or another combination of orders.
   * You can sort any fl field.
   * Value is a field name, followed by asc/desc for ascending/descending order respectively.
   */
  sort?: string;

  /**
   * Absolute URL of the page where the request initiated
   */
  url: string;

  /**
   * The universal customer ID of the user. You only need to pass this field if your particular integration tracks customers this way.
   * The parameter captures user IDs from the customer side, and reuses the information when powering apps or enhancing cross-device linking. In this way,
   * Bloomreach recognizes users in a way that's aligned with your system. Use an anonymous string. Don't use email or other personally identifiable information.
   * If you do not track users this way, then omit this field.
   */
  user_id?: string;

  /**
   * A list of catalog views that you want to see in your suggestions. You must specify the catalog
   * name within the catalog view. For Product catalogs, the catalog name is the same value as your
   * domain_key.
   *
   * A catalog_views value contains the view_ids within a catalog separated by a colon. If you pass
   * multiple catalogs in catalog_views, they must be pipe-separated. Attributes suggestions are
   * enabled for the first two catalogs mentioned as part of catalog_views and only for the first
   * view passed in each of the first two catalogs.
   *
   * For example, &catalog_views=product:store1,store2|recipe:premium|articles would return text and
   * attribute suggestions for the product catalog in the store1 view, and for the recipe catalog in
   * the premium view; only text suggestions will be displayed for the articles catalog.
   */
  catalog_views: string;

  /**
   * The user agent of the browser that's making the search request. Make sure that this value in your
   * API request is the same as the value in the original request from your user. We optimize pages in
   * part by crawling and gathering data, and the original user_agent lets us distinguish between our
   * internal Bloomreach users who QA pages and everyone else who visits your site.
   */
  user_agent?: string;
}
