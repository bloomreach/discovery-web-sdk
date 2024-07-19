import type { Configuration } from '../../../shared/configuration.type';
import type { SearchRequestParameters } from '../search-request.type';
import { ProductSearchFixedOptions } from './product-search-fixed-options.type';

/**
 * Options to provide to the product search request, a subset of the {@link SearchRequestParameters}
 */
export type ProductSearchOptions = Omit<
  SearchRequestParameters,
  keyof ProductSearchFixedOptions | keyof Configuration
>;
