import { faker } from '@faker-js/faker';
import type {
  SuggestResponseAttributeSuggestions,
  SuggestResponseQuerySuggestions,
  SuggestResponseSearchSuggestions,
  SuggestResponse,
  SuggestResponseSuggestionGroups,
} from './suggest-response.type';
import { generateArray } from '../../shared/generate-random-array.mock';

/*
 * Create mock object with the option to override any of the generated fake values
 */
export function createSuggestResponseMock(overrides?: Partial<SuggestResponse>): SuggestResponse {
  const defaults: SuggestResponse = {
    queryContext: {
      originalQuery: faker.lorem.slug(1),
    },
    suggestionGroups: generateArray<SuggestResponseSuggestionGroups>({
      attributeSuggestions: generateArray<SuggestResponseAttributeSuggestions>({
        attributeType: faker.lorem.slug(1),
        name: faker.person.fullName(),
        value: faker.lorem.slug(1),
      }),
      catalogName: faker.person.fullName(),
      product_suggest_query: faker.lorem.slug(1),
      querySuggestions: generateArray<SuggestResponseQuerySuggestions>({
        displayText: faker.lorem.slug(1),
        query: faker.lorem.slug(1),
      }),
      searchSuggestions: generateArray<SuggestResponseSearchSuggestions>({
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
