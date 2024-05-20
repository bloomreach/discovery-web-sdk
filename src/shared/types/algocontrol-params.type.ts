import type { facetPrecision, queryNumericPrecision, queryPrecision, queryRelaxation, querySmartsort, querySpellcorrect } from './parameters';

export interface AlgorithmControlParameters {
  'query.precision'?: queryPrecision;
  'query.relaxation'?: queryRelaxation;
  'query.spellcorrect'?: querySpellcorrect;
  'facet.precision'?: facetPrecision;
  'query.numeric_precision'?: queryNumericPrecision;
  'query.smartsort'?: querySmartsort;
}

