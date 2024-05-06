import type { AccountParameters } from './account-params.type';
import type { CatalogParameters } from './catalog-params.type';

export interface SetupConfiguration {
  searchEndpoint: string;
  account_id: AccountParameters['account_id'];
  auth_key?: AccountParameters['auth_key'];
  domain_key: CatalogParameters['domain_key'];
  view_id?: CatalogParameters['view_id'];
}
