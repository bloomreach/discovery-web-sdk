import type { ExcludedOptions } from '../../../shared/excluded-parameters.type';
import type { SearchRequestParameters } from '../search-request.type';

export type BestsellerOptions = Omit<SearchRequestParameters, ExcludedOptions>;
