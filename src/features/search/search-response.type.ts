/**
 * Category facet fields in the search response.
 */
interface SearchResponseFacetCountsFacetFieldsCategory {
  count?: number;
  crumb?: string;
  parent?: string;
  cat_id?: string;
  cat_name?: string;
  tree_path?: string;
}

/**
 * Represents the general facet fields in the search response.
 */
interface SearchResponseFacetCountsFacetFieldsGeneral {
  count: number;
  name: string;
}

type SearchResponseFacetCountsFacetFields = {
  category?: SearchResponseFacetCountsFacetFieldsCategory[];
} & {
  [key: string]: SearchResponseFacetCountsFacetFieldsGeneral[];
};

/**
 * Represents the price range facet counts in the search response.
 */
interface SearchResponseFacetCountsFacetRangesPrice {
  count: number;
  start: number | '*';
  end: number | '*';
}

/**
 * Represents the facet ranges in the search response.
 */
interface SearchResponseFacetCountsFacetRanges {
  price?: SearchResponseFacetCountsFacetRangesPrice[];
}

/**
 * Represents the facet counts in the search response.
 */
interface SearchResponseFacetCounts {
  facet_ranges?: SearchResponseFacetCountsFacetRanges;
  facet_fields?: SearchResponseFacetCountsFacetFields;
  facet_queries?: object;
}

/**
 * Represents a product variant in the search response.
 */
/**
 * Represents a product variant in the search response.
 */
interface Variant {
  skuid?: string;
  sku_color_group: string;
  sku_swatch_images: string[];
  sku_thumb_images: string[];
  sku_sale_price?: number;
  sku_price?: number;
}

/**
 * Represents a document in the search response.
 */
interface SearchResponseDoc {
  sale_price: number;
  price: number;
  description: string;
  title: string;
  url: string;
  brand: string;
  pid: string;
  thumb_image: string;
  sale_price_range: number[];
  price_range: number[];
  variants: Variant[];
  promotions?: string[];
  score?: number;
}

/**
 * Represents the response section of the search response.
 */
interface SearchResponseResponse {
  numFound?: number;
  start?: number;
  docs?: SearchResponseDoc[];
  maxScore?: number;
}

/**
 * Represents a group in the group list of the search response.
 */
interface SearchResponseGroupResponseGroupListGroup {
  groupValue: string;
  doclist?: SearchResponseResponse;
}

/**
 * Represents a list of groups in the group response of the search response.
 */
interface SearchResponseGroupResponseGroupList {
  matches: number;
  groups: SearchResponseGroupResponseGroupListGroup[];
}

/**
 * Represents the group response in the search response.
 */
interface SearchResponseGroupResponse {
  [groupName: string]: SearchResponseGroupResponseGroupList;
}

/**
 * Represents the price statistics fields in the search response.
 */
interface SearchResponseStatsStatsFieldsPrice {
  max: number;
  min: number;
}

/**
 * Represents the statistics fields in the search response.
 */
interface SearchResponseStatsStatsFields {
  price?: SearchResponseStatsStatsFieldsPrice;
  sale_price?: SearchResponseStatsStatsFieldsPrice;
}

/**
 * Represents the statistics in the search response.
 */
interface SearchResponseStats {
  stats_fields: SearchResponseStatsStatsFields;
}

/**
 * Represents the keywords in the search response.
 */
interface SearchResponseKeywords {
  'original query': string;
  'redirected query': string;
  'redirected url': string;
}

/**
 * Represents the entire search response.
 */
export interface SearchResponse {
  response?: SearchResponseResponse;
  group_response?: SearchResponseGroupResponse;
  facet_counts?: SearchResponseFacetCounts;
  category_map?: object;
  did_you_mean?: string[];
  stats?: SearchResponseStats;
  autoCorrectQuery?: string;
  keywordRedirect?: SearchResponseKeywords;
}
