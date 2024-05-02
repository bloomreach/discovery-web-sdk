import { AccountParameters, CatalogParameters } from './search-request.type';

export interface Configuration {
  endpoint: string;
  account_id: AccountParameters['account_id'];
  auth_key?: AccountParameters['auth_key'];
  domain_key: CatalogParameters['domain_key'];
  view_id?: CatalogParameters['view_id'];
}

let configuration: Configuration | null = null;

export function setConfig(config: Configuration): void {
  configuration = config;
}

export function getConfig(): Configuration {
  if (configuration === null) {
    throw Error('Configuration not yet set');
  }

  return configuration;
}
