import type { ExcludedOptions } from '../../shared/excluded-parameters.type';
import type { SuggestRequestParameters } from './suggest-request.type';

export type AutosuggestOptions = Omit<SuggestRequestParameters, ExcludedOptions>;
