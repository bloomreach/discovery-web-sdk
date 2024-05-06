export interface AlgorithmControlParameters {
  /**
   * Search Recall Precision targets and removes the recall noise to only show relevant products for a query.
   */

  'query.precision'?:
    | 'text_match_precision'
    | 'product_type_precision'
    | 'category_precision'
    | 'llm_based_precision';

  /**
   * Query Relaxation aims at reducing zero results by identifying the core product type in a query if an exact match isn’t found.
   */
  'query.relaxation'?: 'product_type' | 'off';

  /**
   * Spell Correct aims at reducing zero results by autocorrecting misspelled queries.
   */

  'query.spellcorrect'?: 'term_frequency' | 'closest_match' | 'off';

  /** Facet Precision cleans up the facet noise coming from the irrelevant products further down in
   * the recall set without impacting the actual product recall itself. It helps remove irrelevant
   * facets.
   */
  'facet.precision'?: 'standard' | 'high';

  /** Numeric Precision makes the recall set more precise by limiting the recall to only those
   * products that match the numeric intent expressed in the query.
   */
  'query.numeric_precision'?: 'standard' | 'high';

  /**
   * SmartSort ensures that when your shopper chooses to sort the product results, then:
   * - Any noise in the recall set remains buried.
   * - Only relevant products surface when the shopper applies a sort.
   */
  'query.smartsort'?: 'top_products' | 'off';
}

