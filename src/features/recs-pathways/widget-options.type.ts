import type {
  CategoryWidgetRequest,
  GlobalWidgetRequest,
  ItemWidgetRequest,
  KeywordWidgetRequest,
  PersonalizedWidgetRequest,
  RecentlyViewedWidgetRequest,
} from './widget-request.type';

export type GlobalWidgetOptions = Omit<
  GlobalWidgetRequest,
  | GlobalWidgetRequest['account_id']
  | GlobalWidgetRequest['_br_uid_2']
  | NonNullable<GlobalWidgetRequest['auth_key']>
  | GlobalWidgetRequest['domain_key']
>;

export type CategoryWidgetOptions = Omit<
  CategoryWidgetRequest,
  | CategoryWidgetRequest['account_id']
  | CategoryWidgetRequest['_br_uid_2']
  | NonNullable<CategoryWidgetRequest['auth_key']>
  | CategoryWidgetRequest['domain_key']
>;

export type KeywordWidgetOptions = Omit<
  KeywordWidgetRequest,
  | KeywordWidgetRequest['account_id']
  | KeywordWidgetRequest['_br_uid_2']
  | NonNullable<KeywordWidgetRequest['auth_key']>
  | KeywordWidgetRequest['domain_key']
>;

export type ItemWidgetOptions = Omit<
  ItemWidgetRequest,
  | ItemWidgetRequest['account_id']
  | ItemWidgetRequest['_br_uid_2']
  | NonNullable<ItemWidgetRequest['auth_key']>
  | ItemWidgetRequest['domain_key']
>;

export type PersonalizedWidgetOptions = Omit<
  PersonalizedWidgetRequest,
  | PersonalizedWidgetRequest['account_id']
  | PersonalizedWidgetRequest['_br_uid_2']
  | NonNullable<PersonalizedWidgetRequest['auth_key']>
  | PersonalizedWidgetRequest['domain_key']
>;

export type RecentlyViewedWidgetOptions = Omit<
  RecentlyViewedWidgetRequest,
  | RecentlyViewedWidgetRequest['account_id']
  | RecentlyViewedWidgetRequest['_br_uid_2']
  | NonNullable<RecentlyViewedWidgetRequest['auth_key']>
  | RecentlyViewedWidgetRequest['domain_key']
>;
