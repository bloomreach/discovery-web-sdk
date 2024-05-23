import type { ExcludedOptions } from '../../shared/excluded-parameters.type';
import type {
  CategoryWidgetRequest,
  GlobalWidgetRequest,
  ItemWidgetRequest,
  KeywordWidgetRequest,
  PersonalizedWidgetRequest,
  RecentlyViewedWidgetRequest,
} from './widget-request.type';

export type GlobalWidgetOptions = Omit<GlobalWidgetRequest, ExcludedOptions>;

export type CategoryWidgetOptions = Omit<CategoryWidgetRequest, ExcludedOptions>;

export type KeywordWidgetOptions = Omit<KeywordWidgetRequest, ExcludedOptions>;

export type ItemWidgetOptions = Omit<ItemWidgetRequest, ExcludedOptions>;

export type PersonalizedWidgetOptions = Omit<PersonalizedWidgetRequest, ExcludedOptions>;

export type RecentlyViewedWidgetOptions = Omit<RecentlyViewedWidgetRequest, ExcludedOptions>;
