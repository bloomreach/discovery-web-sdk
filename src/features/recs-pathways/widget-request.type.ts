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

  /**
   * Segment identifier. Ranking happens only among items with that segment. Example - view_id:ie
   */
  segment?: string;

  /**
   * A comma-separated list of fields to be sent in the request.
   *
   * Alternatively, you may configure the fields in the Widget Configurator in the Dashboard instead.
   * This parameter is required if not sent via the Dashboard.
   */
  fields?: string;

  /**
   * The filter parameter applies a faceted filter to the returned products, searching for products
   * that fit your parameter values. Any facet that you want to filter must be in your feed.
   *
   * Attributes must be enabled and mapped by Bloomreach. Let your Bloomreach representative know
   * which attributes in your content feed you want to apply as filters to search results.
   *
   * You can filter results based on numeric ranges. For example, &filter=(price:["100" TO "*"]).
   * Please note that a negative filter on ranges is not supported.
   *
   * To provide multiple filters, send multiple filter parameters. For example, &filter=(price:["*" TO
   * "100"])&filter=(color_groups: ("blue"))
   */
  filter?: string | string[];
}

export interface GlobalWidgetRequest extends WidgetRequest {}

export interface CategoryWidgetRequest extends WidgetRequest {
  /**
   * Your site's category ID.
   *
   * The example value shown here, pnb160000000000, is included for your convenience to send a request
   * with Try It.
   */
  cat_id: string;

  /**
   * Facets are disabled by default. To enable facets, set facet=true.
   */
  facet?: boolean;
}

export interface KeywordWidgetRequest extends WidgetRequest {
  /**
   * Your site visitor's search query. Search queries are composed of one or more terms.
   *
   * You can percent encode spaces between terms as %20, or you can leave the spaces unencoded.
   */
  query: string;

  /**
   * Facets are disabled by default. To enable facets, set facet=true.
   */
  facet?: boolean;
}

export interface PersonalizedWidgetRequest extends WidgetRequest {
  /**
   * Your site visitor's search query. Search queries are composed of one or more terms.
   *
   * You can percent encode spaces between terms as %20, or you can leave the spaces unencoded.
   */
  query: string;

  /**
   * ID of the user for personalized recommendations.
   */
  user_id: string;

  /**
   * Facets are disabled by default. To enable facets, set facet=true.
   */
  facet?: boolean;
}

export interface RecentlyViewedWidgetRequest extends WidgetRequest {
  /**
   * Your site visitor's search query. Search queries are composed of one or more terms.
   *
   * You can percent encode spaces between terms as %20, or you can leave the spaces unencoded.
   */
  query: string;

  /**
   * ID of the user for personalized recommendations.
   */
  user_id?: string;

  /**
   * Facets are disabled by default. To enable facets, set facet=true.
   */
  facet?: boolean;
}

export interface ItemWidgetRequest extends WidgetRequest {
  /**
   * Comma-separated list of Item IDs. Specifies access to a particular set of items. For product
   * catalog, this would be the PID(s).
   */
  item_ids: string;
}
