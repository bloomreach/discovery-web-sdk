import type {
  _br_uid_2,
  account_id,
  auth_key,
  callback,
  catalog_name,
  domain_key,
  efq,
  facetPrecision,
  facetRange,
  facetVersion,
  fl,
  fq,
  group_limit,
  group_offset,
  groupby,
  ll,
  q,
  queryNumericPrecision,
  queryPrecision,
  queryRelaxation,
  querySmartsort,
  querySpellcorrect,
  ref_url,
  request_id,
  request_type,
  rows,
  search_type,
  sort,
  start,
  statsField,
  url,
  user_id,
  view_id,
} from '../../shared/parameters.type';

export interface SearchRequestParameters {
  account_id: account_id;
  auth_key?: auth_key;
  domain_key: domain_key;
  view_id?: view_id;
  request_type: request_type;
  search_type: search_type;
  _br_uid_2: _br_uid_2;
  request_id?: request_id;
  url: url;
  ref_url?: ref_url;
  user_id?: user_id;
  q: q;
  fl: fl;
  start: start;
  rows: rows;
  'facet.version'?: facetVersion;
  'facet.range'?: facetRange;
  fq?: fq;
  efq?: efq;
  ll?: ll;
  sort?: sort;
  'stats.field'?: statsField;
  groupby?: groupby;
  group_limit?: group_limit;
  group_offset?: group_offset;
  callback?: callback;
  'query.precision'?: queryPrecision;
  'query.relaxation'?: queryRelaxation;
  'query.spellcorrect'?: querySpellcorrect;
  'facet.precision'?: facetPrecision;
  'query.numeric_precision'?: queryNumericPrecision;
  'query.smartsort'?: querySmartsort;
}

export interface ContentSearchRequestParameters extends SearchRequestParameters {
  catalog_name: catalog_name;
}
