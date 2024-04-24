export interface SearchResponseFacetCountsFacetFieldsCategory {
  count?: number;
  crumb?: string;
  parent?: string;
  cat_id?: string;
  cat_name?: string;
  tree_path?: string;
}

export interface SearchResponseFacetCountsFacetFieldsGeneral {
  count: number;
  name: string;
}
export type SearchResponseFacetCountsFacetFields = {
  category?: SearchResponseFacetCountsFacetFieldsCategory[];
} & {
  [key: string]: SearchResponseFacetCountsFacetFieldsGeneral[];
};

interface SearchResponseFacetCountsFacetRangesPrice {
  count: number;
  start: number;
  end: number;
}

export interface SearchResponseFacetCountsFacetRanges {
  price?: SearchResponseFacetCountsFacetRangesPrice[];
}

export interface SearchResponseFacetCounts {
  facet_ranges?: SearchResponseFacetCountsFacetRanges;
  facet_fields?: SearchResponseFacetCountsFacetFields;
  facet_queries?: object;
}

export interface Variant {
  skuid?: string;
  sku_color_group: string;
  sku_swatch_images: string[];
  sku_thumb_images: string[];
  sku_sale_price?: number;
  sku_price?: number;
}

export interface SearchResponseDoc {
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

export interface SearchResponseResponse {
  numFound?: number;
  start?: number;
  docs?: SearchResponseDoc[];
  maxScore?: number;
}

export interface SearchResponseGroupResponseGroupListGroup {
  groupValue: string;
  doclist?: SearchResponseResponse;
}

export interface SearchResponseGroupResponseGroupList {
  matches: number;
  groups: SearchResponseGroupResponseGroupListGroup[];
}

export interface SearchResponseGroupResponse {
  [groupName: string]: SearchResponseGroupResponseGroupList;
}

export interface SearchResponseStatsStatsFieldsPrice {
  max: number;
  min: number;
}

export interface SearchResponseStatsStatsFields {
  price?: SearchResponseStatsStatsFieldsPrice;
  sale_price?: SearchResponseStatsStatsFieldsPrice;
}

export interface SearchResponseStats {
  stats_fields: SearchResponseStatsStatsFields;
}

export interface SearchResponseKeywords {
  'original query': string;
  'redirected query': string;
  'redirected url': string;
}

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

