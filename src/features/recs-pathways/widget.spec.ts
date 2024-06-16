import { faker } from '@faker-js/faker';
import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createSetupConfigMock } from '../../shared/configuration.mock';
import { mockRequest } from '../../shared/mock-request.mock';
import {
  createCategoryWidgetOptionsMock,
  createGlobalWidgetOptionsMock,
  createItemWidgetOptionsMock,
  createKeywordWidgetOptionsMock,
  createPersonalizedWidgetOptionsMock,
  createRecentlyViewedWidgetOptionsMock,
} from './widget-options.mock';
import { createWidgetResponseMock } from './widget-response.mock';
import {
  getCategoryWidget,
  getGlobalWidget,
  getItemWidget,
  getKeywordWidget,
  getPersonalizedWidget,
  getRecentlyViewedWidget,
} from './widgets';

describe('GlobalWidget API', () => {
  const config = createSetupConfigMock();
  const params = createGlobalWidgetOptionsMock();
  const widgetId = 'testWidget';

  test('required parameters', async () => {
    await mockRequest(
      getGlobalWidget,
      [widgetId, config, params],
      [
        http.get(`${config.widgetEndpoint}global/${widgetId}`, () => {
          return HttpResponse.json(createWidgetResponseMock());
        }),
      ],
    );
  });
});

describe('CategoryWidget API', () => {
  const config = createSetupConfigMock();
  const catId = faker.commerce.product();
  const params = createCategoryWidgetOptionsMock({
    cat_id: catId,
  });
  const widgetId = 'testWidget';
  let searchParams: URLSearchParams;

  test('required parameters', async () => {
    await mockRequest(
      getCategoryWidget,
      [widgetId, config, params],
      [
        http.get(`${config.widgetEndpoint}category/${widgetId}`, ({ request }) => {
          searchParams = new URL(request.url).searchParams;
          return HttpResponse.json(createWidgetResponseMock());
        }),
      ],
      () => {
        expect(searchParams.get('cat_id')).toEqual(catId);
      },
    );
  });
});

describe('KeywordWidget API', () => {
  const config = createSetupConfigMock();
  const query = faker.commerce.productName();
  const params = createKeywordWidgetOptionsMock({
    query,
  });
  const widgetId = 'testWidget';
  let searchParams: URLSearchParams;

  test('required parameters', async () => {
    await mockRequest(
      getKeywordWidget,
      [widgetId, config, params],
      [
        http.get(`${config.widgetEndpoint}keyword/${widgetId}`, ({ request }) => {
          searchParams = new URL(request.url).searchParams;
          return HttpResponse.json(createWidgetResponseMock());
        }),
      ],
      () => {
        expect(searchParams.get('query')).toEqual(query);
      },
    );
  });
});

describe('ItemWidget API', () => {
  const config = createSetupConfigMock();
  const item_ids = 'test,test2';
  const params = createItemWidgetOptionsMock({
    item_ids,
  });
  const widgetId = 'testWidget';
  let searchParams: URLSearchParams;

  test('required parameters', async () => {
    await mockRequest(
      getItemWidget,
      [widgetId, config, params],
      [
        http.get(`${config.widgetEndpoint}item/${widgetId}`, ({ request }) => {
          searchParams = new URL(request.url).searchParams;
          return HttpResponse.json(createWidgetResponseMock());
        }),
      ],
      () => {
        expect(searchParams.get('item_ids')).toEqual(item_ids);
      },
    );
  });
});

describe('PersonalizedWidget API', () => {
  const config = createSetupConfigMock();
  const query = faker.lorem.word(5);
  const user_id = faker.lorem.word(10);
  const params = createPersonalizedWidgetOptionsMock({
    query,
    user_id,
  });
  const widgetId = 'testWidget';
  let searchParams: URLSearchParams;

  test('required parameters', async () => {
    await mockRequest(
      getPersonalizedWidget,
      [widgetId, config, params],
      [
        http.get(`${config.widgetEndpoint}personalized/${widgetId}`, ({ request }) => {
          searchParams = new URL(request.url).searchParams;
          return HttpResponse.json(createWidgetResponseMock());
        }),
      ],
      () => {
        expect(searchParams.get('query')).toEqual(query);
        expect(searchParams.get('user_id')).toEqual(user_id);
      },
    );
  });
});

describe('RecentlyViewedWidget API', () => {
  const config = createSetupConfigMock();
  const query = faker.lorem.word(5);
  const params = createRecentlyViewedWidgetOptionsMock({
    query,
  });
  const widgetId = 'testWidget';
  let searchParams: URLSearchParams;

  test('required parameters', async () => {
    await mockRequest(
      getRecentlyViewedWidget,
      [widgetId, config, params],
      [
        http.get(`${config.widgetEndpoint}recentlyviewed/${widgetId}`, ({ request }) => {
          searchParams = new URL(request.url).searchParams;
          return HttpResponse.json(createWidgetResponseMock());
        }),
      ],
      () => {
        expect(searchParams.get('query')).toEqual(query);
      },
    );
  });
});
