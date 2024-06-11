import type { Configuration } from '../../../shared/configuration.type';
import type { FixedOptions } from '../../../shared/fixed-options.type';
import type { ContentSearchRequestParameters } from '../search-request.type';

/**
 * Options to provide to the content search request, a subset of the {@link ContentSearchRequestParameters}
 */
export type ContentSearchOptions = Omit<
  ContentSearchRequestParameters,
  keyof FixedOptions | keyof Configuration
>;
