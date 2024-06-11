import type { Configuration } from '../../shared/configuration.type';
import type { FixedOptions } from '../../shared/fixed-options.type';
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
export type GlobalWidgetOptions = Omit<
  GlobalWidgetRequest,
  keyof FixedOptions | keyof Configuration
>;

/**
 * Options to provide to the Category Widget request, a subset of the {@link CategoryWidgetRequest}
 */
export type CategoryWidgetOptions = Omit<
  CategoryWidgetRequest,
  keyof FixedOptions | keyof Configuration
>;

/**
 * Options to provide to the Keyword Widget request, a subset of the {@link KeywordWidgetRequest}
 */
export type KeywordWidgetOptions = Omit<
  KeywordWidgetRequest,
  keyof FixedOptions | keyof Configuration
>;

/**
 * Options to provide to the Item Widget request, a subset of the {@link ItemWidgetRequest}
 */
export type ItemWidgetOptions = Omit<ItemWidgetRequest, keyof FixedOptions | keyof Configuration>;

/**
 * Options to provide to the Personalized Widget request, a subset of the {@link PersonalizedWidgetRequest}
 */
export type PersonalizedWidgetOptions = Omit<
  PersonalizedWidgetRequest,
  keyof FixedOptions | keyof Configuration
>;

/**
 * Options to provide to the Recently Viewed request, a subset of the {@link RecentlyViewedWidgetRequest}
 */
export type RecentlyViewedWidgetOptions = Omit<
  RecentlyViewedWidgetRequest,
  keyof FixedOptions | keyof Configuration
>;
