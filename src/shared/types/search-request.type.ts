import type { AccountParameters } from './account-params.type';
import type { AlgorithmControlParameters } from './algocontrol-params.type';
import type { CallTypeParameters } from './calltype-params.type';
import type { CatalogParameters } from './catalog-params.type';
import type { ContentParameters } from './content-params.type';
import type { CORSParameters } from './cors-params.type';
import type { DisplayParameters } from './display-params.type';
import type { QueryParameters } from './query-params.type';
import type { TrackingParameters } from './tracking-params.type';

export interface SearchRequestParameters
  extends AccountParameters,
    CatalogParameters,
    QueryParameters,
    DisplayParameters,
    CallTypeParameters,
    TrackingParameters,
    CORSParameters,
    AlgorithmControlParameters {}

export interface ContentSearchRequestParameters
  extends SearchRequestParameters,
    ContentParameters {}
