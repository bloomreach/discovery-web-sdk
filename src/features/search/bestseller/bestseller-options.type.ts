import type { Configuration } from '../../../shared/configuration.type';
import type { FixedOptions } from '../../../shared/fixed-options.type';
import type { SearchRequestParameters } from '../search-request.type';

/**
 * Options to provide to the bestseller search request, a subset of the {@link SearchRequestParameters}
 */
export type BestsellerOptions = Omit<
  SearchRequestParameters,
  keyof FixedOptions | keyof Configuration
>;
