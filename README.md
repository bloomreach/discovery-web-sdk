# Bloomreach Discovery Web SDK

Welcome to the Bloomreach Discovery Web SDK, a TypeScript SDK designed to interact with the
Bloomreach Discovery APIs. This SDK provides a convenient way to integrate and use the Discovery
data in your applications.

## Requirements

The SDK currently requires:

- [Node.js 22+](https://nodejs.org)

## Contribution & Development
See our [Contribution Guide](./CONTRIBUTING.md).

## Getting Started

### Installation

NPM:

```sh
npm add @bloomreach/discovery-web-sdk
```

PNPM:

```sh
pnpm add @bloomreach/discovery-web-sdk
```

Yarn:

```sh
yarn add @bloomreach/discovery-web-sdk
```

### Type documentation
The TSDoc for the SDK is available [here](https://bloomreach.github.io/discovery-web-sdk).

### Usage examples

#### Product Search API

```typescript
import type { Configuration, ProductSearchOptions } from '@bloomreach/discovery-web-sdk';
import { productSearch } from '@bloomreach/discovery-web-sdk';

// Set the account and catalog configuration
const config: Configuration = {
  account_id: 1234,
  domain_key: 'example_com',
};

// Set up the search parameters
const searchOptions: ProductSearchOptions = {
  q: 'Generic Metal Pants',
  fl: 'pid,title,description,brand,price,thumb_image',
  start: 0,
  rows: 10,
  url: 'http://example.com',
  _br_uid_2: 'someCookieId',
};

// Retrieve the product data with a search using the provided search parameters
const data = await productSearch(config, searchOptions);
```

#### Category Search API

```typescript
import type { Configuration, CategorySearchOptions } from '@bloomreach/discovery-web-sdk';
import { categorySearch } from '@bloomreach/discovery-web-sdk';

// Set the account and catalog configuration
const config: Configuration = {
  account_id: 1234,
  domain_key: 'example_com',
};

// Set up the search parameters
const searchOptions: CategorySearchOptions = {
  q: 'cat92082',
  fl: 'pid,title,description,brand,price,thumb_image',
  start: 0,
  rows: 10,
  url: 'http://example.com',
  _br_uid_2: 'someCookieId',
};

// Retrieve the product data with a search using the provided search parameters
const data = await categorySearch(config, searchOptions);
```

#### Bestseller API

```typescript
import type { Configuration, BestsellerOptions } from '@bloomreach/discovery-web-sdk';
import { bestseller } from '@bloomreach/discovery-web-sdk';

// Set the account and catalog configuration
const config: Configuration = {
  account_id: 1234,
  domain_key: 'example_com',
};

// Set up the search parameters
const searchOptions: BestsellerOptions = {
  q: 'Bolts',
  fl: 'pid,title,description,brand,price,thumb_image',
  start: 0,
  rows: 10,
  url: 'http://example.com',
  _br_uid_2: 'someCookieId',
};

// Retrieve the product data with a search using the provided search parameters
const data = await bestseller(config, searchOptions);
```

#### Content Search API

```typescript
import type { Configuration, ContentSearchOptions } from '@bloomreach/discovery-web-sdk';
import { contentSearch } from '@bloomreach/discovery-web-sdk';

// Set the account and catalog configuration
const config: Configuration = {
  account_id: 1234,
  domain_key: 'example_com',
};

// Set up the search parameters
const searchOptions: ContentSearchOptions = {
  catalog_name: 'Flowers',
  q: 'Roses',
  fl: 'pid,title,description,brand,price,thumb_image',
  start: 0,
  rows: 10,
  url: 'http://example.com',
  _br_uid_2: 'someCookieId',
};

// Retrieve the Content data with a search using the provided search parameters
const data = await contentSearch(config, searchOptions);
```

#### Autosuggest API

```typescript
import type { Configuration, AutosuggestOptions } from '@bloomreach/discovery-web-sdk';
import { autosuggest } from '@bloomreach/discovery-web-sdk';

// Set the account and catalog configuration
const config: Configuration = {
  account_id: 1234,
  domain_key: 'example_com',
};

// Set up the search parameters
const searchOptions: AutosuggestOptions = {
  catalog_views: 'product:store1,store2|recipe:premium|articles',
  q: 'Roses',
  url: 'http://example.com',
  _br_uid_2: 'someCookieId',
};

// Retrieve the suggestions with a search using the provided search parameters
const data = await autosuggest(config, searchOptions);
```

#### Recommendations & Pathways API

```typescript
import {
  CategoryWidgetOptions,
  Configuration,
  WidgetResponse,
  getCategoryWidget,
} from '@bloomreach/discovery-web-sdk';

// Set the account and catalog configuration
const config: Configuration = {
  account_id: 1234,
  domain_key: 'example_com',
};

// Set up the search parameters
const searchOptions: CategoryWidgetOptions = {
  cat_id: 'cat123959',
  start: 0,
  rows: 10,
  url: 'http://example.com',
  ref_url: 'http://google.com',
  request_id: 1234,
  _br_uid_2: 'test',
};

const widgetId = 'my_widget_id';

// Retrieve the widget using the widgetId and parameters
const widget = getCategoryWidget(widgetId, config, searchOptions);
```

Similar functions and types are exposed for all widget types:
- `getGlobalWidget`
- `getKeywordWidget`
- `getCategoryWidget`
- `getItemWidget`
- `getPersonalizedWidget`
- `getRecentlyViewedWidget`

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
