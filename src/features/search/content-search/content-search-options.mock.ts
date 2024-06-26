import { faker } from '@faker-js/faker';
import type { ContentSearchOptions } from './content-search-options.type';

/*
 * Create mock object with the option to override any of the generated fake values
 */
export function createContentSearchOptionsMock(
  overrides?: Partial<ContentSearchOptions>,
): ContentSearchOptions {
  const defaults = {
    catalog_name: faker.commerce.department(),
    q: faker.commerce.productName(),
    fl: [`pid`, Array.from({ length: 4 }, () => faker.database.column())].join(','),
    start: 0,
    rows: faker.number.int({ min: 1, max: 5 }),
    'facet.version': 3.0,
    'facet.range': faker.database.column(),
    fq: `${faker.database.column()}: ${faker.lorem.word()}`,
    efq: `${faker.database.column()}: ${faker.lorem.word()}`,
    ll: `${faker.location.latitude()},${faker.location.longitude()}`,
    sort: `${faker.database.column()}+${Math.random() ? 'asc' : 'desc'}`,
    'stats.field': Array.from({ length: 4 }, () => faker.database.column()).join(','),
    groupby: faker.database.column(),
    group_limit: faker.number.int({ min: 1, max: 5 }),
    group_offset: 0,
    request_type: 'search',
    search_type: 'keyword',
    _br_uid_2: faker.string.uuid(),
    request_id: faker.string.numeric(13),
    url: faker.internet.url(),
    ref_url: faker.internet.url(),
    user_id: faker.string.uuid(),
    callback: 'myCallbackFunction',
    'query.precision': faker.helpers.arrayElement([
      'text_match_precision',
      'product_type_precision',
      'content_precision',
      'llm_based_precision',
    ]),
    'query.relaxation': Math.random() ? 'product_type' : 'off',
    'query.spellcorrect': faker.helpers.arrayElement(['term_frequency', 'closest_match', 'off']),
    'facet.precision': Math.random() ? 'standard' : 'high',
    'query.numeric_precision': Math.random() ? 'standard' : 'high',
    'query.smartsort': Math.random() ? 'top_products' : 'off',
  };

  return Object.assign(defaults, overrides);
}
