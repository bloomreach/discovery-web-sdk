# Bloomreach Discovery Web SDK: A Guide

## Introduction

Welcome to the Bloomreach Discovery Web SDK. This guide is crafted to help you understand the value
and benefits of using this tool. The Bloomreach Discovery Web SDK is a software development kit that
allows you to integrate Bloomreach's advanced search, merchandising, and personalization
capabilities into your website.

## What is an SDK?

An SDK is a toolkit packed with tools, libraries, and documentation that developers use to create
amazing applications. The Bloomreach Discovery Web SDK is specifically designed to work harmoniously
with Bloomreach's Discovery APIs and features. These APIs and features are the secret sauce that
provides powerful search and personalization features, making your website smarter and more
intuitive.

## Why Use an SDK?

### 1. Decrease Time-to-Value

One of the primary benefits of using an SDK is the significant reduction in development time. SDKs
provide pre-built functions, methods, and tools that developers can use to integrate complex
features quickly. This means your development team can implement advanced functionalities without
having to build them from scratch, leading to faster project completion and quicker time-to-value.

### 2. Simplify Integration

SDKs are designed to simplify the integration process. They come with comprehensive documentation,
examples, and support, making it easier for developers to understand and use the provided tools.
This reduces the learning curve and allows your team to focus on building and enhancing your
application rather than dealing with integration complexities.

### 3. Ensure Consistency and Reliability

Using an SDK ensures that your application integrates with external services in a consistent and
reliable manner. SDKs are thoroughly tested and maintained by the provider, which means you can
trust that the integration will work as expected. This reliability is crucial for maintaining a
high-quality user experience.

### 4. Leverage Advanced Features

SDKs often provide access to advanced features and functionalities that would be difficult and
time-consuming to develop independently. By using an SDK, you can leverage these features to enhance
your application, providing a richer and more engaging experience for your users.

### 5. Focus on Core Competencies

By offloading the development of complex integrations to an SDK, your development team can focus on
what they do best—building and improving your core application. This allows for better resource
allocation and more efficient use of your team's skills and expertise.

In the context of the Bloomreach Discovery Web SDK, these benefits translate to a faster and more
efficient integration of Bloomreach's powerful search, merchandising, and personalization
capabilities into your website. This means you can quickly enhance your website's user experience,
stay competitive, and drive better results for your business.

## Getting Started

Getting started with the Bloomreach Discovery Web SDK is a breeze. Your development team can follow
the documentation and examples provided to integrate the SDK into your website. The SDK is designed
to be developer-friendly, setting sane defaults and providing code completion in your IDE.

### Technical Details and Code Examples

Here are some examples to help you understand how the SDK can be used in practice:

#### Product Search API

The Product Search API allows you to search for products in your catalog. Here’s how you can use it:

```typescript
import type { Configuration, ProductSearchOptions } from '@bloomreach/discovery-web-sdk';
import { productSearch } from '@bloomreach/discovery-web-sdk';

const config: Configuration = {
  account_id: 1234,
  domain_key: 'example_com',
};

const searchOptions: ProductSearchOptions = {
  q: 'Generic Metal Pants',
  fl: 'pid,title,description,brand,price,thumb_image',
  start: 0,
  rows: 10,
  url: 'http://example.com',
  _br_uid_2: 'someCookieId',
};

const data = await productSearch(config, searchOptions);
```

#### Content Search API

The Content Search API allows you to search for content within your catalog. Here’s an example:

```typescript
import type { Configuration, ContentSearchOptions } from '@bloomreach/discovery-web-sdk';
import { contentSearch } from '@bloomreach/discovery-web-sdk';

const config: Configuration = {
  account_id: 1234,
  domain_key: 'example_com',
};

const searchOptions: ContentSearchOptions = {
  catalog_name: 'Flowers',
  q: 'Roses',
  fl: 'pid,title,description,brand,price,thumb_image',
  start: 0,
  rows: 10,
  url: 'http://example.com',
  _br_uid_2: 'someCookieId',
};

const data = await contentSearch(config, searchOptions);
```

#### Autosuggest API

The Autosuggest API provides suggestions based on user input. Here’s how to use it:

```typescript
import type { Configuration, AutosuggestOptions } from '@bloomreach/discovery-web-sdk';
import { autosuggest } from '@bloomreach/discovery-web-sdk';

const config: Configuration = {
  account_id: 1234,
  domain_key: 'example_com',
};

const searchOptions: AutosuggestOptions = {
  catalog_views: 'product:store1,store2|recipe:premium|articles',
  q: 'Roses',
  url: 'http://example.com',
  _br_uid_2: 'someCookieId',
};

const data = await autosuggest(config, searchOptions);
```

#### Global Widget API

The Global Widget API allows you to retrieve personalized recommendations. Here’s an example:

```typescript
import {
  GlobalWidgetOptions,
  Configuration,
  WidgetResponse,
  getGlobalWidget,
} from '@bloomreach/discovery-web-sdk';

const config: Configuration = {
  account_id: 1234,
  domain_key: 'example_com',
};

const searchOptions: GlobalWidgetOptions = {
  start: 0,
  rows: 10,
  url: 'http://example.com',
  ref_url: 'http://google.com',
  request_id: 1234,
  _br_uid_2: 'test',
};

const widgetId = 'my_widget_id';

const widget = getGlobalWidget(widgetId, config, searchOptions);
```

## Conclusion

The Bloomreach Discovery Web SDK can significantly enhance your website's user experience, save time
and resources, boost conversion rates, and help you stay competitive. By leveraging this SDK, you
can provide your visitors with a more personalized and engaging experience, ultimately driving
better results for your business.

For more information and to get started, visit the
[Bloomreach Discovery Web SDK documentation](https://bloomreach.github.io/discovery-web-sdk).

## Additional Resources

- [Bloomreach Discovery Documentation](https://documentation.bloomreach.com)
- [Bloomreach Discovery API Reference](https://api.bloomreach.com)
- [Bloomreach Discovery Web SDK TSDoc](https://bloomreach.github.io/discovery-web-sdk)

