import type {
  _br_uid_2,
  account_id,
  callback,
  q,
  ref_url,
  request_id,
  request_type,
  sort,
  url,
  user_id,
} from '../../shared/parameters.type';
import type { catalog_views, user_agent } from './suggest-parameters.type';

export interface SuggestRequestParameters {
  _br_uid_2: _br_uid_2;
  account_id: account_id;
  callback?: callback;
  q: q;
  ref_url?: ref_url;
  request_id?: request_id;
  request_type: request_type;
  sort?: sort;
  url: url;
  user_id?: user_id;
  catalog_views: catalog_views;
  user_agent?: user_agent;
}
