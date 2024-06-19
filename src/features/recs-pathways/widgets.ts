import type { Configuration } from '../../shared/configuration.type';
import { WIDGET_ENDPOINT_PROD } from '../../shared/constants';
import { logAPICall } from '../../shared/logger';
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
 * @returns {Promise<WidgetResponse>} - The widget response.
 */
export async function getGlobalWidget(
  id: string,
  configuration: Configuration,
  options: GlobalWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, debug, ...config } = configuration;
  const queryParams = Object.assign(config, options);
  const url = buildApiUrl(`${widgetEndpoint || WIDGET_ENDPOINT_PROD}global/${id}`, queryParams);

  if (debug) {
    logAPICall('getGlobalWidget', configuration, options, {}, {}, queryParams, url);
  }

  const data = await fetch(url);
  return data.json();
}

/**
 * Fetches the category widget data.
 * @returns {Promise<WidgetResponse>} - The widget response.
 */
export async function getCategoryWidget(
  id: string,
  configuration: Configuration,
  options: CategoryWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, debug, ...config } = configuration;
  const queryParams = Object.assign(config, options);
  const url = buildApiUrl(`${widgetEndpoint || WIDGET_ENDPOINT_PROD}category/${id}`, queryParams);

  if (debug) {
    logAPICall(getCategoryWidget.name, configuration, options, {}, {}, queryParams, url);
  }

  const data = await fetch(url);
  return data.json();
}

/**
 * Fetches the keyword widget data.
 * @returns {Promise<WidgetResponse>} - The widget response.
 */
export async function getKeywordWidget(
  id: string,
  configuration: Configuration,
  options: KeywordWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, debug, ...config } = configuration;
  const queryParams = Object.assign(config, options);
  const url = buildApiUrl(`${widgetEndpoint || WIDGET_ENDPOINT_PROD}keyword/${id}`, queryParams);

  if (debug) {
    logAPICall('getKeywordWidget', configuration, options, {}, {}, queryParams, url);
  }

  const data = await fetch(url);
  return data.json();
}

/**
 * Fetches the item widget data.
 * @returns {Promise<WidgetResponse>} - The widget response.
 */
export async function getItemWidget(
  id: string,
  configuration: Configuration,
  options: ItemWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, debug, ...config } = configuration;
  const queryParams = Object.assign(config, options);
  const url = buildApiUrl(`${widgetEndpoint || WIDGET_ENDPOINT_PROD}item/${id}`, queryParams);

  if (debug) {
    logAPICall('getItemWidget', configuration, options, {}, {}, queryParams, url);
  }

  const data = await fetch(url);
  return data.json();
}

/**
 * Fetches the personalized widget data.
 * @returns {Promise<WidgetResponse>} - The widget response.
 */
export async function getPersonalizedWidget(
  id: string,
  configuration: Configuration,
  options: PersonalizedWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, debug, ...config } = configuration;
  const queryParams = Object.assign(config, options);
  const url = buildApiUrl(
    `${widgetEndpoint || WIDGET_ENDPOINT_PROD}personalized/${id}`,
    queryParams,
  );

  if (debug) {
    logAPICall('getPersonalizedWidget', configuration, options, {}, {}, queryParams, url);
  }

  const data = await fetch(url);
  return data.json();
}

/**
 * Fetches the recently viewed widget data.
 * @returns {Promise<WidgetResponse>} - The widget response.
 */
export async function getRecentlyViewedWidget(
  id: string,
  configuration: Configuration,
  options: RecentlyViewedWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, debug, ...config } = configuration;
  const queryParams = Object.assign(config, options);
  const url = buildApiUrl(
    `${widgetEndpoint || WIDGET_ENDPOINT_PROD}recentlyviewed/${id}`,
    queryParams,
  );

  if (debug) {
    logAPICall('getRecentlyViewedWidget', configuration, options, {}, {}, queryParams, url);
  }

  const data = await fetch(url);
  return data.json();
}
