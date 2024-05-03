import { productSearchEndpoint } from './constants';
import { AccountParameters, CatalogParameters } from './search-request.type';

export const noConfigMessage = 'Configuration has not been set';

export interface Configuration {
  productSearchEndpoint: string;
  account_id: AccountParameters['account_id'];
  auth_key?: AccountParameters['auth_key'];
  domain_key: CatalogParameters['domain_key'];
  view_id?: CatalogParameters['view_id'];
}

let configuration: Configuration | null = null;

export function setConfig(config: Configuration): void {
  configuration = config;

  if (config.productSearchEndpoint === null) {
    configuration.productSearchEndpoint = productSearchEndpoint
  }
}

export function getConfig(): Configuration {
  if (configuration === null) {
    throw Error(noConfigMessage);
  }

  return configuration;
}

export function clearConfig(): void {
  configuration = null;
}
