import type { Configuration } from '../../../shared/configuration.type';
import type { SearchFixedOptions } from '../search-fixed-options.type';
import type { SearchRequestParameters } from '../search-request.type';

/**
 * Options to provide to the product search request, a subset of the {@link SearchRequestParameters}
 */
export type ProductSearchOptions = Omit<
  SearchRequestParameters,
  keyof SearchFixedOptions | keyof Configuration
>;
