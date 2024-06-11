export interface Configuration {
  /**
   * Account ID
   */
  account_id: number;
  /**
   * Product/Content catalog name
   */
  domain_key: string;
  /**
   * Authentication Key
   */
  auth_key?: string;

  /**
   * The endpoint for Recommendations & Pathways Widgets API
   */
  widgetEndpoint?: string;

  /**
   * The endpoint for Product Search & Category Search APIs
   */
  searchEndpoint?: string;

  /**
   * The endpoint for Autosuggest API
   */
  suggestEndpoint?: string;

  /**
   * A unique identifier for a specific view of your product catalog.
   * If you have multiple versions of your site, each with their own product catalog characteristics like product titles and prices,
   * then add view_id to your call.
   * Bloomreach uses your view_id parameter value to display the right product information for your customers based on their individual site views.
   * You can enter any string value to identify the specific site catalog view. This string must be consistent in your pixel, API, and product catalog.
   */
  view_id?: string;
}
