import type { CategorySearchOptions } from './features/category-search/category-search';
import type { ProductSearchOptions } from './features/product-search/product-search';
import type { SearchResponse } from './shared/types/search-response.type';
import type { SetupConfiguration } from './shared/types/configuration.type';
import { categorySearch } from './features/category-search/category-search';
import { productSearch } from './features/product-search/product-search';
import { setConfig } from './shared/config';

function initialize(config: SetupConfiguration) {
  setConfig(config);
}

export type { SetupConfiguration, ProductSearchOptions, CategorySearchOptions, SearchResponse };
export { initialize, productSearch, categorySearch };
