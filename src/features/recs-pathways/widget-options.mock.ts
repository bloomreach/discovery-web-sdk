import { faker } from '@faker-js/faker';
import type { WidgetRequest } from './widget-request.type';
import type {
  CategoryWidgetOptions,
  GlobalWidgetOptions,
  ItemWidgetOptions,
  KeywordWidgetOptions,
  PersonalizedWidgetOptions,
  RecentlyViewedWidgetOptions,
} from './widget-options.type';
import type { ExcludedOptions } from '../../shared/excluded-parameters.type';

type BaseWidgetOptions = Omit<WidgetRequest, ExcludedOptions>

/*
 * Using Required<> because we want the mock to contain all possible values and type warnings should
 * show if options get added / removed in the original interface
 */
export function createBaseWidgetOptionsMock(): Required<BaseWidgetOptions> {
  const defaults: Required<BaseWidgetOptions> = {
    _br_uid_2: faker.string.uuid(),
    start: 0,
    rows: faker.number.int({ min: 1, max: 5 }),
    sort: `${faker.database.column()}+${Math.random() ? 'asc' : 'desc'}`,
    request_id: Number(faker.string.numeric(13)),
    url: faker.internet.url(),
    ref_url: faker.internet.url(),
    segment: '',
    fields: `${faker.database.column()},${faker.database.column()}`,
    filter: '(price:["*" TO "100"])',
  };

  return defaults;
}

export function createGlobalWidgetOptionsMock(
  overrides?: Partial<GlobalWidgetOptions>,
): GlobalWidgetOptions {
  const defaults: Required<GlobalWidgetOptions> = {
    ...createBaseWidgetOptionsMock(),
  };

  return Object.assign(defaults, overrides);
}

export function createCategoryWidgetOptionsMock(
  overrides?: Partial<CategoryWidgetOptions>,
): CategoryWidgetOptions {
  const defaults: Required<CategoryWidgetOptions> = {
    ...createBaseWidgetOptionsMock(),
    cat_id: faker.commerce.product(),
    facet: true,
  };

  return Object.assign(defaults, overrides);
}

export function createKeywordWidgetOptionsMock(
  overrides?: Partial<KeywordWidgetOptions>,
): KeywordWidgetOptions {
  const defaults: Required<KeywordWidgetOptions> = {
    ...createBaseWidgetOptionsMock(),
    query: faker.lorem.word(),
    facet: true,
  };

  return Object.assign(defaults, overrides);
}

export function createItemWidgetOptionsMock(
  overrides?: Partial<ItemWidgetOptions>,
): ItemWidgetOptions {
  const defaults: Required<ItemWidgetOptions> = {
    ...createBaseWidgetOptionsMock(),
    item_ids: `${faker.string.alphanumeric(5)}, ${faker.string.alphanumeric(5)}`,
  };

  return Object.assign(defaults, overrides);
}

export function createPersonalizedWidgetOptionsMock(
  overrides?: Partial<PersonalizedWidgetOptions>,
): PersonalizedWidgetOptions {
  const defaults: Required<PersonalizedWidgetOptions> = {
    ...createBaseWidgetOptionsMock(),
    facet: true,
    user_id: faker.string.alphanumeric(5),
    query: faker.lorem.words(3)
  };

  return Object.assign(defaults, overrides);
}

export function createRecentlyViewedWidgetOptionsMock(
  overrides?: Partial<RecentlyViewedWidgetOptions>,
): RecentlyViewedWidgetOptions {
  const defaults: Required<RecentlyViewedWidgetOptions> = {
    ...createBaseWidgetOptionsMock(),
    facet: true,
    user_id: faker.string.alphanumeric(5),
    query: faker.lorem.words(3)
  };

  return Object.assign(defaults, overrides);
}
