import type { Configuration } from '../../../shared/configuration.type';
import { SEARCH_ENDPOINT_PROD } from '../../../shared/constants';
import { logAPICall } from '../../../shared/logger';
import { buildApiUrl } from '../../../shared/url-builders';
import type { ContentSearchRequestParameters } from '../search-request.type';
import type { SearchResponse } from '../search-response.type';
import { ContentSearchFixedOptions } from './content-search-fixed-options.type';
import type { ContentSearchOptions } from './content-search-options.type';

const FIXED_OPTIONS: ContentSearchFixedOptions = {
  request_type: 'search',
  search_type: 'keyword',
};

export function isContentSearchOptions(
  options: Record<string, any>,
): options is ContentSearchOptions {
  const otherRequiredProperties = ['catalog_name'];

  return (
    otherRequiredProperties.every(
      (key) => key in options && Object.prototype.hasOwnProperty.call(options, key),
    ) &&
    Object.entries(FIXED_OPTIONS).every(
      ([key, value]) => options[key] !== undefined && options[key] === value,
    )
  );
}

/**
 * Performs a content search using the provided configuration and options.
 */
export async function contentSearch(
  configuration: Configuration,
  options: ContentSearchOptions,
): Promise<SearchResponse> {
  const { searchEndpoint, ...config } = configuration;
  const defaults: Partial<ContentSearchRequestParameters> = {
    fl: 'item_id',
    start: 0,
    'facet.version': '3.0',
  };

  const queryParams = Object.assign(config, FIXED_OPTIONS, defaults, options);
  const url = buildApiUrl(searchEndpoint || SEARCH_ENDPOINT_PROD, queryParams);

  logAPICall('contentSearch', configuration, options, FIXED_OPTIONS, defaults, queryParams, url);

  const data = await fetch(url);
  return data.json() as Promise<SearchResponse>;
}
