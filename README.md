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

```typescript
import type { ProductSearchOptions } from '@bloomreach/discovery-web-sdk';
import { productSearch } from '@bloomreach/discovery-web-sdk';

// Set up the search parameters
const searchOptions: ProductSearchOptions = {
  q: 'Generic Metal Pants',
  fl: 'pid,title,description',
  start: 0,
  rows: 3,
};

// Retrieve the product data with a search using the provided search parameters
const data = await productSearch(searchOptions);

// Log out all the matched product documents
console.log(data.response.docs);
```

## Contributing

Contributions are welcome! Please read the [contributing guidelines](CONTRIBUTING.md) before getting started.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
