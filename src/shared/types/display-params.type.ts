import type { group_limit, group_offset, groupby, sort, statsField } from './parameters';

export interface DisplayParameters {
  sort?: sort;
  'stats.field'?: statsField;
  groupby?: groupby;
  group_limit?: group_limit;
  group_offset?: group_offset;
}

