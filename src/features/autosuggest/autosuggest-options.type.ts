import type { Configuration } from '../../shared/configuration.type';
import type { FixedOptions } from '../../shared/fixed-options.type';
import type { SuggestRequestParameters } from './suggest-request.type';

/**
 * Options to provide to the autosuggest request, a subset of the {@link SuggestRequestParameters}
 */
export type AutosuggestOptions = Omit<
  SuggestRequestParameters,
  keyof FixedOptions | keyof Configuration
>;
