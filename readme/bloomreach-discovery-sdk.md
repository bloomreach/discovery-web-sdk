---
title: Discovery Web SDK
category: 61b785225c1c75017a430718
---

> ⚙️ **SDK Reference**
>
> The detailed TSDoc and reference for the SDK are available [here](https://bloomreach.github.io/discovery-web-sdk/modules.html).

The Bloomreach Discovery Web SDK is a TypeScript SDK designed to interact with the
[Bloomreach Discovery APIs](https://documentation.bloomreach.com/discovery/reference/welcome). This SDK provides a convenient way to integrate and use the Discovery data in your website or applications.

The SDK provides an interface to implement the following Bloomreach Discovery APIs:

- [Autosuggest API](https://documentation.bloomreach.com/discovery/docs/discovery-web-sdk#autosuggest-api)
- [Product and Category Search API](https://documentation.bloomreach.com/discovery/docs/discovery-web-sdk#product-and-category-search-api)
- [Content Search API](https://documentation.bloomreach.com/discovery/docs/discovery-web-sdk#content-search-api)
- [Recommendations and Pathways APIs](https://documentation.bloomreach.com/discovery/docs/discovery-web-sdk#recommendations-and-pathways-apis)
- [Bestseller API](https://documentation.bloomreach.com/discovery/docs/discovery-web-sdk#bestseller-api)

The Discovery Web SDK is fully Open-Sourced and open to contributions.

<div class="card-with-icon-wrapper">

  <a href="https://github.com/bloomreach/discovery-web-sdk" class="card-with-icon-item justify-content-center">

  <svg height="40" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="40" data-view-component="true" class="octicon octicon-mark-github">
    <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path>

</svg>View Repo
    </a>
  </div>
</div>


## Getting Started

### Requirements

The SDK currently requires:

- [Node.js 20+](https://nodejs.org/)

### Installation

```shell NPM
npm add @bloomreach/discovery-web-sdk
```

```shell PNPM
pnpm add @bloomreach/discovery-web-sdk
```

```shell Yarn
yarn add @bloomreach/discovery-web-sdk
```

#### Debug logging

Adding `debug: true` to the `Configuration` you pass into the API calls will enable some minor debug logging with `[BR]` as a prefix for your convenience.

## Usage

Below are some usage examples that demonstrate how to call and use various Discovery APIs in your website or application using the SDK.

### Autosuggest API

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

### Product and Category Search API

#### Product Search

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

#### Category Search

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

### Content Search API

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

### Recommendations and Pathways APIs

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

### Bestseller API

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

## Contribution & Development

The Bloomreach Discovery SDK is Open-Source, and we welcome outside contributions. See our [Contribution Guide](https://github.com/bloomreach/discovery-web-sdk/blob/main/CONTRIBUTING.md).

## License

This project is licensed under the MIT License. See the [LICENSE](https://github.com/bloomreach/discovery-web-sdk/blob/main/LICENSE) file for details.
