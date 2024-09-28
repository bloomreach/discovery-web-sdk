import type { Configuration } from '../../../shared/configuration.type';
import type { SearchRequestParameters } from '../search-request.type';
import { CategorySearchFixedOptions } from './category-search-fixed-options.type';

/**
 * Options to provide to the category search request, a subset of the {@link SearchRequestParameters}
 */
export type CategorySearchOptions = Omit<
  SearchRequestParameters,
  'q' | keyof CategorySearchFixedOptions | keyof Configuration
>;
