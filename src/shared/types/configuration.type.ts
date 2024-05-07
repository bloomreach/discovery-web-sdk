import type { AccountParameters } from './account-params.type';
import type { CatalogParameters } from './catalog-params.type';

export interface SetupConfiguration {
  account_id: AccountParameters['account_id'];
  domain_key: CatalogParameters['domain_key'];
  auth_key?: AccountParameters['auth_key'];
  searchEndpoint?: string;
  view_id?: CatalogParameters['view_id'];
}
