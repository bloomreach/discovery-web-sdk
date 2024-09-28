import type { Configuration } from '../../../shared/configuration.type';
import type { ContentSearchRequestParameters } from '../search-request.type';
import { ContentSearchFixedOptions } from './content-search-fixed-options.type';

/**
 * Options to provide to the content search request, a subset of the {@link ContentSearchRequestParameters}
 */
export type ContentSearchOptions = Omit<
  ContentSearchRequestParameters,
  'q' | keyof ContentSearchFixedOptions | keyof Configuration
>;
