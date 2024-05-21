import type {
  _br_uid_2,
  account_id,
  callback,
  q,
  ref_url,
  request_id,
  request_type,
  sort,
  url,
  user_id,
} from '../../shared/parameters.type';

export interface SuggestRequestParameters {
  _br_uid_2: _br_uid_2;
  account_id: account_id;
  callback?: callback;
  q: q;
  ref_url?: ref_url;
  request_id?: request_id;
  request_type: request_type;
  sort?: sort;
  url: url;
  user_id?: user_id;

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
