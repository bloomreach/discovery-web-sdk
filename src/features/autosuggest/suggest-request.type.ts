import type { catalog_views, user_agent } from './suggest-parameters.type';

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
  request_type: 'search' | 'suggest'

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
   * Product/Content catalog name
   */
  catalog_views: catalog_views;

  /**
   * User agent string
   */
  user_agent?: user_agent;
}
