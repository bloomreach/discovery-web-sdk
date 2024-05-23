import { faker } from '@faker-js/faker';
import type { WidgetResponseDoc, WidgetResponse } from './widget-response.type';
import { generateArray } from '../../shared/generate-random-array.mock';

/*
 * Create mock object with the option to override any of the generated fake values
 */
export function createWidgetResponseMock(overrides?: Partial<WidgetResponse>): WidgetResponse {
  const defaults: WidgetResponse = {
    response: {
      numFound: Number(faker.string.alphanumeric(5)),
      start: 0,
      docs: generateArray<WidgetResponseDoc>({
        price: Number(faker.string.alphanumeric(5)),
        url: faker.internet.url(),
        pid: faker.string.alphanumeric(5),
        sale_price: Number(faker.string.alphanumeric(5)),
        thumb_image: faker.internet.url(),
        title: faker.lorem.words(4),
      }),
    },
    metadata: {
      widget: {
        id: faker.string.alphanumeric(5),
        name: faker.lorem.slug(2),
        description: faker.lorem.paragraph(),
        type: faker.lorem.slug(1),
        rid: faker.string.alphanumeric(5),
      },
      query: faker.commerce.productName(),
      response: {
        personalized_results: true,
        fallback: '',
        recall: 'pure',
      },
    },
  };

  return Object.assign(defaults, overrides);
}
