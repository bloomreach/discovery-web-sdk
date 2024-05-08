# Bloomreach Discovery Web SDK

Welcome to the Bloomreach Discovery Web SDK, a TypeScript SDK designed to interact with the
Bloomreach Discovery APIs. This SDK provides a convenient way to integrate and use the Discovery
data in your applications.

## Getting Started

First initialize the SDK by providing a set of account and product catalog specific options

```typescript
import type { SetupConfiguration } from '@bloomreach/discovery-web-sdk';
import { initialize } from '@bloomreach/discovery-web-sdk';

// Set the account and catalog configuration
const config: SetupConfiguration = {
  account_id: 1234,
  domain_key: 'example_com',
};

// Initialize the SDK with the provided configuration
initialize(config);
```

Now we can utilize the exposed methods to retrieve data from the Bloomreach Discovery platform:

### Product Search API
```typescript
import type { ProductSearchOptions } from '@bloomreach/discovery-web-sdk';
import { productSearch } from '@bloomreach/discovery-web-sdk';

// Set up the search parameters
const searchOptions: ProductSearchOptions = {
  q: 'Generic Metal Pants',
};

// Retrieve the product data with a search using the provided search parameters
const data = await productSearch(searchOptions);
```

### Category API
```typescript
import type { CategorySearchOptions } from '@bloomreach/discovery-web-sdk';
import { categorySearch } from '@bloomreach/discovery-web-sdk';

// Set up the search parameters
const searchOptions: ProductSearchOptions = {
  q: 'cat92082',
};

// Retrieve the product data with a search using the provided search parameters
const data = await categorySearch(searchOptions);
```

### Bestseller API
```typescript
import type { BestsellerOptions } from '@bloomreach/discovery-web-sdk';
import { bestseller } from '@bloomreach/discovery-web-sdk';

// Set up the search parameters
const searchOptions: BestsellerOptions = {
  q: 'Bolts',
};

// Retrieve the product data with a search using the provided search parameters
const data = await bestseller(searchOptions);
```

### Content Search API
```typescript
import type { ContentSearchOptions } from '@bloomreach/discovery-web-sdk';
import { contentSearch } from '@bloomreach/discovery-web-sdk';

// Set up the search parameters
const searchOptions: ContentSearchOptions = {
  catalog_name: 'Flowers',
  q: 'Roses',
};

// Retrieve the Content data with a search using the provided search parameters
const data = await contentSearch(searchOptions);
```

### Autosuggest API
```typescript
import type { AutosuggestOptions } from '@bloomreach/discovery-web-sdk';
import { autosuggest } from '@bloomreach/discovery-web-sdk';

// Set up the search parameters
const searchOptions: AutosuggestOptions = {
  catalog_views: 'product:store1,store2|recipe:premium|articles',
  q: 'Roses',
};

// Retrieve the suggestions with a search using the provided search parameters
const data = await autosuggest(searchOptions);
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
