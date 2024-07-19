import type { Configuration } from '../../../shared/configuration.type';
import type { SearchRequestParameters } from '../search-request.type';
import { BestsellerFixedOptions } from './bestseller-fixed-options.type';

/**
 * Options to provide to the bestseller search request, a subset of the {@link SearchRequestParameters}
 */
export type BestsellerOptions = Omit<
  SearchRequestParameters,
  keyof BestsellerFixedOptions | keyof Configuration
>;
