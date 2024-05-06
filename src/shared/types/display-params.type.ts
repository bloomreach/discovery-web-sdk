export interface DisplayParameters {
  /**
   * Sorts results based on the field value in ascending, descending, or another combination of orders.
   * You can sort any fl field.
   * Value is a field name, followed by asc/desc for ascending/descending order respectively.
   */
  sort?: string;

  /**
   * This parameter allows you to display the maximum and minimum values of any numeric field in your data set for a user query.
   * With this parameter, you can get all the documents matching a query and display the minimum and maximum values of single-valued,
   * numeric attributes such as price, sale_price, length, width, reviews, etc.
   */
  'stats.field'?: string;

  /**
   * The attribute that products will be grouped by.
   * Grouping Attribute specifications:
   * - It must be an indexed, single-valued text attribute.
   * - It cannot be a numeric attribute.
   * - It cannot be a SKU attribute.
   * - You can only use 1 attribute on the groupby field.
   * - Reserved attributes such as pid, brand, etc. cannot be used for grouping.
   */
  groupby?: string;

  /**
   * Number of items in a group when grouping parameter exists.
   */
  group_limit?: number;

  /**
   * This allows you to set the pagination within groups. The default value of group_offset is 0
   */
  group_offset?: number;
}

