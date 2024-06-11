import type { Configuration } from '../../shared/configuration.type';
import { WIDGET_ENDPOINT_PROD } from '../../shared/constants';
import { buildApiUrl } from '../../shared/url-builders';
import type {
  CategoryWidgetOptions,
  GlobalWidgetOptions,
  ItemWidgetOptions,
  KeywordWidgetOptions,
  PersonalizedWidgetOptions,
  RecentlyViewedWidgetOptions,
} from './widget-options.type';
import type { WidgetResponse } from './widget-response.type';

/**
 * Fetches the global widget data.
 * @param {string} id - The widget ID.
 * @param {Configuration} configuration - The configuration object.
 * @param {GlobalWidgetOptions} options - The options for the global widget.
 * @returns {Promise<WidgetResponse>} - The widget response.
 */
export async function getGlobalWidget(
  id: string,
  configuration: Configuration,
  options: GlobalWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, ...config } = configuration;
  const defaults = {};

  const queryParams = Object.assign(config, defaults, options);

  const url = buildApiUrl(`${widgetEndpoint || WIDGET_ENDPOINT_PROD}global/${id}`, queryParams);
  const data = await fetch(url);
  return data.json();
}

/**
 * Fetches the category widget data.
 * @param {string} id - The widget ID.
 * @param {Configuration} configuration - The configuration object.
 * @param {CategoryWidgetOptions} options - The options for the category widget.
 * @returns {Promise<WidgetResponse>} - The widget response.
 */
export async function getCategoryWidget(
  id: string,
  configuration: Configuration,
  options: CategoryWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, ...config } = configuration;
  const defaults = {};

  const queryParams = Object.assign(config, defaults, options);

  const url = buildApiUrl(`${widgetEndpoint || WIDGET_ENDPOINT_PROD}category/${id}`, queryParams);
  const data = await fetch(url);
  return data.json();
}

/**
 * Fetches the keyword widget data.
 * @param {string} id - The widget ID.
 * @param {Configuration} configuration - The configuration object.
 * @param {KeywordWidgetOptions} options - The options for the keyword widget.
 * @returns {Promise<WidgetResponse>} - The widget response.
 */
export async function getKeywordWidget(
  id: string,
  configuration: Configuration,
  options: KeywordWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, ...config } = configuration;
  const defaults = {};

  const queryParams = Object.assign(config, defaults, options);

  const url = buildApiUrl(`${widgetEndpoint || WIDGET_ENDPOINT_PROD}keyword/${id}`, queryParams);
  const data = await fetch(url);
  return data.json();
}

/**
 * Fetches the item widget data.
 * @param {string} id - The widget ID.
 * @param {Configuration} configuration - The configuration object.
 * @param {ItemWidgetOptions} options - The options for the item widget.
 * @returns {Promise<WidgetResponse>} - The widget response.
 */
export async function getItemWidget(
  id: string,
  configuration: Configuration,
  options: ItemWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, ...config } = configuration;
  const defaults = {};

  const queryParams = Object.assign(config, defaults, options);

  const url = buildApiUrl(`${widgetEndpoint || WIDGET_ENDPOINT_PROD}item/${id}`, queryParams);
  const data = await fetch(url);
  return data.json();
}

/**
 * Fetches the personalized widget data.
 * @param {string} id - The widget ID.
 * @param {Configuration} configuration - The configuration object.
 * @param {PersonalizedWidgetOptions} options - The options for the personalized widget.
 * @returns {Promise<WidgetResponse>} - The widget response.
 */
export async function getPersonalizedWidget(
  id: string,
  configuration: Configuration,
  options: PersonalizedWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, ...config } = configuration;
  const defaults = {};

  const queryParams = Object.assign(config, defaults, options);

  const url = buildApiUrl(
    `${widgetEndpoint || WIDGET_ENDPOINT_PROD}personalized/${id}`,
    queryParams,
  );
  const data = await fetch(url);
  return data.json();
}

/**
 * Fetches the recently viewed widget data.
 * @param {string} id - The widget ID.
 * @param {Configuration} configuration - The configuration object.
 * @param {RecentlyViewedWidgetOptions} options - The options for the recently viewed widget.
 * @returns {Promise<WidgetResponse>} - The widget response.
 */
export async function getRecentlyViewedWidget(
  id: string,
  configuration: Configuration,
  options: RecentlyViewedWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, ...config } = configuration;
  const defaults = {};

  const queryParams = Object.assign(config, defaults, options);

  const url = buildApiUrl(
    `${widgetEndpoint || WIDGET_ENDPOINT_PROD}recentlyviewed/${id}`,
    queryParams,
  );
  const data = await fetch(url);
  return data.json();
}
