import type { ExcludedOptions } from '../../../shared/excluded-parameters.type';
import type { ContentSearchRequestParameters } from '../search-request.type';

export type ContentSearchOptions = Omit<ContentSearchRequestParameters, ExcludedOptions>;
