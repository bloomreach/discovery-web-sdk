import { faker } from '@faker-js/faker';
import type { SuggestResponse } from './suggest-response.type';

/*
 * Create array of random length between 1 and 5 and map each index to a value
 */
const generateArray = (fillValue: any) =>
  Array.from({ length: faker.number.int({ min: 1, max: 5 }) }, () => fillValue);

/*
 * Create mock object with the option to override any of the generated fake values
 */
export function createSuggestResponseMock(overrides?: Partial<SuggestResponse>): SuggestResponse {
  const defaults: SuggestResponse = {
    queryContext: {
      originalQuery: faker.lorem.slug(1),
    },
    suggestionGroups: generateArray({
      attributeSuggestions: generateArray({
        attributeType: faker.lorem.slug(1),
        name: faker.person.fullName(),
        value: faker.lorem.slug(1),
      }),
      catalogName: faker.person.fullName(),
      product_suggest_query: faker.lorem.slug(1),
      querySuggestions: generateArray({
        displayText: faker.lorem.slug(1),
        query: faker.lorem.slug(1),
      }),
      searchSuggestions: generateArray({
        pid: faker.lorem.slug(1),
        sale_price: faker.lorem.slug(1),
        thumb_image: faker.lorem.slug(1),
        title: faker.lorem.slug(1),
        url: faker.internet.url(),
      }),
      view: faker.lorem.slug(1),
    }),
  };

  return Object.assign(defaults, overrides);
}
