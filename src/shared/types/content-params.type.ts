export interface ContentParameters {
  /**
   * Named identifier of the catalog. A catalog is a grouping of items into a broader category such
   * as blogs, videos, etc. A catalog is a representation of a group of items and must have a unique
   * name, that is also unique to a domain (if you have multiple sites).
   *
   * Catalogs are created in the DataConnect UI by default, you can rename the catalogs when you set
   * up your catalogs initially.
   */
  catalog_name: string;
}
