import type {
  _br_uid_2,
  account_id,
  auth_key,
  domain_key,
  ref_url,
  request_id,
  rows,
  sort,
  start,
  url,
  user_id,
  view_id,
} from '../../shared/parameters.type';
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
  _br_uid_2: _br_uid_2;
  account_id: account_id;
  auth_key?: auth_key;
  domain_key: domain_key;
  ref_url: ref_url;
  request_id: request_id;
  rows: rows;
  sort?: sort;
  start: start;
  url: url;
  view_id: view_id;
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
  user_id: user_id;
  facet?: facet;
}

export interface RecentlyViewedWidgetRequest extends WidgetRequest {
  query: query;
  user_id?: user_id;
  facet?: facet;
}

export interface ItemWidgetRequest extends WidgetRequest {
  item_ids: item_ids;
}
