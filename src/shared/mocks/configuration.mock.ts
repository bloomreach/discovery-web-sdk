import { faker } from '@faker-js/faker';
import { SEARCH_ENDPOINT_PROD } from '../constants';
import type { SetupConfiguration } from '../types/configuration.type';

export function createSetupConfigMock(
  overrides?: Partial<SetupConfiguration>,
): Required<SetupConfiguration> {
  const defaults: SetupConfiguration = {
    searchEndpoint: SEARCH_ENDPOINT_PROD,
    account_id: parseFloat(faker.string.numeric(4)),
    domain_key: `${faker.string.alpha(4)}_com`,
    auth_key: faker.string.alphanumeric(13),
    view_id: faker.string.alphanumeric(5),
  };

  return Object.assign(defaults, overrides) as Required<SetupConfiguration>;
}
