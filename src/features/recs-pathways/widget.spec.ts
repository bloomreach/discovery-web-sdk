import { faker } from '@faker-js/faker';
import { HttpResponse, http } from 'msw';
import { describe, expect, test } from 'vitest';
import { createSetupConfigMock } from '../../shared/configuration.mock';
import { WIDGET_ENDPOINT_PROD } from '../../shared/constants';
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
  const br_uid = faker.database.mongodbObjectId();
  const searchOptions = createGlobalWidgetOptionsMock({
    _br_uid_2: br_uid,
  });
  const widgetId = 'testWidget';
  let searchParams: URLSearchParams;

  test('required parameters', async () => {
    await mockRequest(
      getGlobalWidget,
      [widgetId, config, searchOptions],
      [
        http.get(`${config.widgetEndpoint}global/${widgetId}`, ({ request }) => {
          searchParams = new URL(request.url).searchParams;
          return HttpResponse.json(createWidgetResponseMock());
        }),
      ],
      () => {
        expect(searchParams.get('_br_uid_2')).toEqual(br_uid);
      },
    );
  });

  test('uses default widgetEndpoint when not provided', async () => {
    const configWithoutEndpoint = { ...config, widgetEndpoint: undefined };

    await expect(
      mockRequest(
        getGlobalWidget,
        [widgetId, configWithoutEndpoint, searchOptions],
        [
          http.get(`${WIDGET_ENDPOINT_PROD}global/${widgetId}`, () => {
            return HttpResponse.json(createWidgetResponseMock());
          }),
        ],
      ),
    ).resolves.not.toThrow();
  });
});

describe('CategoryWidget API', () => {
  const config = createSetupConfigMock();
  const catId = faker.commerce.product();
  const searchOptions = createCategoryWidgetOptionsMock({
    cat_id: catId,
  });
  const widgetId = 'testWidget';
  let searchParams: URLSearchParams;

  test('required parameters', async () => {
    await mockRequest(
      getCategoryWidget,
      [widgetId, config, searchOptions],
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

  test('uses default widgetEndpoint when not provided', async () => {
    const configWithoutEndpoint = { ...config, widgetEndpoint: undefined };

    await expect(
      mockRequest(
        getCategoryWidget,
        [widgetId, configWithoutEndpoint, searchOptions],
        [
          http.get(`${WIDGET_ENDPOINT_PROD}category/${widgetId}`, () => {
            return HttpResponse.json(createWidgetResponseMock());
          }),
        ],
      ),
    ).resolves.not.toThrow();
  });
});

describe('KeywordWidget API', () => {
  const config = createSetupConfigMock();
  const query = faker.commerce.productName();
  const searchOptions = createKeywordWidgetOptionsMock({
    query,
  });
  const widgetId = 'testWidget';
  let searchParams: URLSearchParams;

  test('required parameters', async () => {
    await mockRequest(
      getKeywordWidget,
      [widgetId, config, searchOptions],
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

  test('uses default widgetEndpoint when not provided', async () => {
    const configWithoutEndpoint = { ...config, widgetEndpoint: undefined };

    await expect(
      mockRequest(
        getKeywordWidget,
        [widgetId, configWithoutEndpoint, searchOptions],
        [
          http.get(`${WIDGET_ENDPOINT_PROD}keyword/${widgetId}`, () => {
            return HttpResponse.json(createWidgetResponseMock());
          }),
        ],
      ),
    ).resolves.not.toThrow();
  });
});

describe('ItemWidget API', () => {
  const config = createSetupConfigMock();
  const item_ids = 'test,test2';
  const searchOptions = createItemWidgetOptionsMock({
    item_ids,
  });
  const widgetId = 'testWidget';
  let searchParams: URLSearchParams;

  test('required parameters', async () => {
    await mockRequest(
      getItemWidget,
      [widgetId, config, searchOptions],
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

  test('uses default widgetEndpoint when not provided', async () => {
    const configWithoutEndpoint = { ...config, widgetEndpoint: undefined };

    await expect(
      mockRequest(
        getItemWidget,
        [widgetId, configWithoutEndpoint, searchOptions],
        [
          http.get(`${WIDGET_ENDPOINT_PROD}item/${widgetId}`, () => {
            return HttpResponse.json(createWidgetResponseMock());
          }),
        ],
      ),
    ).resolves.not.toThrow();
  });
});

describe('PersonalizedWidget API', () => {
  const config = createSetupConfigMock();
  const query = faker.lorem.word(5);
  const user_id = faker.lorem.word(10);
  const searchOptions = createPersonalizedWidgetOptionsMock({
    query,
    user_id,
  });
  const widgetId = 'testWidget';
  let searchParams: URLSearchParams;

  test('required parameters', async () => {
    await mockRequest(
      getPersonalizedWidget,
      [widgetId, config, searchOptions],
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

  test('uses default widgetEndpoint when not provided', async () => {
    const configWithoutEndpoint = { ...config, widgetEndpoint: undefined };

    await expect(
      mockRequest(
        getPersonalizedWidget,
        [widgetId, configWithoutEndpoint, searchOptions],
        [
          http.get(`${WIDGET_ENDPOINT_PROD}personalized/${widgetId}`, () => {
            return HttpResponse.json(createWidgetResponseMock());
          }),
        ],
      ),
    ).resolves.not.toThrow();
  });
});

describe('RecentlyViewedWidget API', () => {
  const config = createSetupConfigMock();
  const query = faker.lorem.word(5);
  const searchOptions = createRecentlyViewedWidgetOptionsMock({
    query,
  });
  const widgetId = 'testWidget';
  let searchParams: URLSearchParams;

  test('required parameters', async () => {
    await mockRequest(
      getRecentlyViewedWidget,
      [widgetId, config, searchOptions],
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

  test('uses default widgetEndpoint when not provided', async () => {
    const configWithoutEndpoint = { ...config, widgetEndpoint: undefined };

    await expect(
      mockRequest(
        getRecentlyViewedWidget,
        [widgetId, configWithoutEndpoint, searchOptions],
        [
          http.get(`${WIDGET_ENDPOINT_PROD}recentlyviewed/${widgetId}`, () => {
            return HttpResponse.json(createWidgetResponseMock());
          }),
        ],
      ),
    ).resolves.not.toThrow();
  });
});
