import { getConfig } from '../../shared/config';
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

export async function getGlobalWidget(id: string, params: GlobalWidgetOptions): Promise<WidgetResponse> {
  const { widgetEndpoint, ...config } = getConfig();
  const defaults = {};

  const queryParams = Object.assign(config, defaults, params);

  const url = buildApiUrl(`${widgetEndpoint || WIDGET_ENDPOINT_PROD}global/${id}`, queryParams);
  const data = await fetch(url);
  return data.json();
}

export async function getCategoryWidget(
  id: string,
  params: CategoryWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, ...config } = getConfig();
  const defaults = {};

  const queryParams = Object.assign(config, defaults, params);

  const url = buildApiUrl(`${widgetEndpoint || WIDGET_ENDPOINT_PROD}category/${id}`, queryParams);
  const data = await fetch(url);
  return data.json();
}

export async function getKeywordWidget(id: string, params: KeywordWidgetOptions): Promise<WidgetResponse> {
  const { widgetEndpoint, ...config } = getConfig();
  const defaults = {};

  const queryParams = Object.assign(config, defaults, params);

  const url = buildApiUrl(`${widgetEndpoint || WIDGET_ENDPOINT_PROD}keyword/${id}`, queryParams);
  const data = await fetch(url);
  return data.json();
}

export async function getItemWidget(id: string, params: ItemWidgetOptions): Promise<WidgetResponse> {
  const { widgetEndpoint, ...config } = getConfig();
  const defaults = {};

  const queryParams = Object.assign(config, defaults, params);

  const url = buildApiUrl(`${widgetEndpoint || WIDGET_ENDPOINT_PROD}item/${id}`, queryParams);
  const data = await fetch(url);
  return data.json();
}

export async function getPersonalizedWidget(
  id: string,
  params: PersonalizedWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, ...config } = getConfig();
  const defaults = {};

  const queryParams = Object.assign(config, defaults, params);

  const url = buildApiUrl(
    `${widgetEndpoint || WIDGET_ENDPOINT_PROD}personalized/${id}`,
    queryParams,
  );
  const data = await fetch(url);
  return data.json();
}

export async function getRecentlyViewedWidget(
  id: string,
  params: RecentlyViewedWidgetOptions,
): Promise<WidgetResponse> {
  const { widgetEndpoint, ...config } = getConfig();
  const defaults = {};

  const queryParams = Object.assign(config, defaults, params);

  const url = buildApiUrl(
    `${widgetEndpoint || WIDGET_ENDPOINT_PROD}recentlyviewed/${id}`,
    queryParams,
  );
  const data = await fetch(url);
  return data.json();
}
