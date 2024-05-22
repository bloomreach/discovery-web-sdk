import type { account_id, auth_key, domain_key, view_id } from '../shared/parameters.type';

export interface SetupConfiguration {
  account_id: account_id;
  domain_key: domain_key;
  auth_key?: auth_key;
  widgetEndpoint?: string;
  searchEndpoint?: string;
  suggestEndpoint?: string;
  view_id?: view_id;
}
