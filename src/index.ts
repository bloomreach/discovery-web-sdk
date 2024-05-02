import { setConfig } from './shared/config';
import { searchProducts } from './features/product-search/product-search';
import type { Configuration } from './shared/config';
import type { SearchRequestParameters } from './shared/search-request.type';
import type { SearchResponse } from './shared/search-response.type';

function initialize(config: Configuration) {
  setConfig(config);
}

export type { Configuration, SearchRequestParameters, SearchResponse };
export { initialize, searchProducts };
