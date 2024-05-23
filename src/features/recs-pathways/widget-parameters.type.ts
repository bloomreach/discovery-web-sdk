/**
 * A comma-separated list of fields to be sent in the request.
 *
 * Alternatively, you may configure the fields in the Widget Configurator in the Dashboard instead.
 * This parameter is required if not sent via the Dashboard.
 */
export type fields = string;

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
export type filter = string;

/**
 * Your site's category ID.
 *
 * The example value shown here, pnb160000000000, is included for your convenience to send a request
 * with Try It.
 */
export type cat_id = string;

/**
 * Facets are disabled by default. To enable facets, set facet=true.
 */
export type facet = boolean;

/**
 * Comma-separated list of Item IDs. Specifies access to a particular set of items. For product
 * catalog, this would be the PID(s).
 */
export type item_ids = string;

/**
 * Your site visitor's search query. Search queries are composed of one or more terms.
 *
 * You can percent encode spaces between terms as %20, or you can leave the spaces unencoded.
 */
export type query = string;

/**
 * Segment identifier. Ranking happens only among items with that segment. Example - view_id:ie
 */
export type segment = string;
