import type {
  cat_id,
  facet,
  fields,
  filter,
  item_ids,
  query,
  segment,
} from './widget-parameters.type';

export interface WidgetRequest {
  /**
   * First Party cookie that provides unique identifier
   */
  _br_uid_2: string;

  /**
   * Account ID
   */
  account_id: number;

  /**
   * Authentication Key
   */
  auth_key?: string;

  /**
   * Product/Content catalog name
   */
  domain_key: string;

  /**
   * URL of the page or HTTP referrer where request started
   */
  ref_url: string;

  /**
   * ID to track site visitor clicks
   */
  request_id: number;

  /**
   * The number of matching items to return per results page in the API response.
   * The maximum value is 200.
   */
  rows: number;

  /**
   * Sorts results based on the field value in ascending, descending, or another combination of orders.
   * You can sort any fl field.
   * Value is a field name, followed by asc/desc for ascending/descending order respectively.
   */
  sort?: string;

  /**
   * The number of the first item on a page of results.
   * For example, the first item on the first page is 0, making the start value also 0.
   * The maximum value is 10000.
   */
  start: number;

  /**
   * Absolute URL of the page where the request initiated
   */
  url: string;

  /**
   * A unique identifier for a specific view of your product catalog.
   * If you have multiple versions of your site, each with their own product catalog characteristics like product titles and prices,
   * then add view_id to your call.
   * Bloomreach uses your view_id parameter value to display the right product information for your customers based on their individual site views.
   * You can enter any string value to identify the specific site catalog view. This string must be consistent in your pixel, API, and product catalog.
   */
  view_id: string;

  segment?: segment;
  fields?: fields;
  filter?: filter;
}

export interface GlobalWidgetRequest extends WidgetRequest {}

export interface CategoryWidgetRequest extends WidgetRequest {
  cat_id: cat_id;
  facet?: facet;
}

export interface KeywordWidgetRequest extends WidgetRequest {
  query: query;
  facet?: facet;
}

export interface PersonalizedWidgetRequest extends WidgetRequest {
  query: query;
  user_id: string;
  facet?: facet;
}

export interface RecentlyViewedWidgetRequest extends WidgetRequest {
  query: query;
  user_id?: string;
  facet?: facet;
}

export interface ItemWidgetRequest extends WidgetRequest {
  item_ids: item_ids;
}
