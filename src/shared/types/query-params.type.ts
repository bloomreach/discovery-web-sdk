import type { efq, facetRange, facetVersion, fl, fq, ll, q, rows, start } from './parameters';

export interface QueryParameters {
  q: q;
  fl: fl;
  start: start;
  rows: rows;
  'facet.version'?: facetVersion;
  'facet.range'?: facetRange;
  fq?: fq;
  efq?: efq;
  ll?: ll;
}

