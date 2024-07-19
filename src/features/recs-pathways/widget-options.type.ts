import type { Configuration } from '../../shared/configuration.type';
import type {
  CategoryWidgetRequest,
  GlobalWidgetRequest,
  ItemWidgetRequest,
  KeywordWidgetRequest,
  PersonalizedWidgetRequest,
  RecentlyViewedWidgetRequest,
} from './widget-request.type';

/**
 * Options to provide to the Global Widget request, a subset of the {@link GlobalWidgetRequest}
 */
export type GlobalWidgetOptions = Omit<GlobalWidgetRequest, keyof Configuration>;

/**
 * Options to provide to the Category Widget request, a subset of the {@link CategoryWidgetRequest}
 */
export type CategoryWidgetOptions = Omit<CategoryWidgetRequest, keyof Configuration>;

/**
 * Options to provide to the Keyword Widget request, a subset of the {@link KeywordWidgetRequest}
 */
export type KeywordWidgetOptions = Omit<KeywordWidgetRequest, keyof Configuration>;

/**
 * Options to provide to the Item Widget request, a subset of the {@link ItemWidgetRequest}
 */
export type ItemWidgetOptions = Omit<ItemWidgetRequest, keyof Configuration>;

/**
 * Options to provide to the Personalized Widget request, a subset of the {@link PersonalizedWidgetRequest}
 */
export type PersonalizedWidgetOptions = Omit<PersonalizedWidgetRequest, keyof Configuration>;

/**
 * Options to provide to the Recently Viewed request, a subset of the {@link RecentlyViewedWidgetRequest}
 */
export type RecentlyViewedWidgetOptions = Omit<RecentlyViewedWidgetRequest, keyof Configuration>;
