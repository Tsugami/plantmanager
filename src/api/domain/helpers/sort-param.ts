export type SortOrderTypes = 'asc' | 'desc';

export interface SortParam<Entity, Fields extends keyof Entity> {
  sort?: {
    field: Fields;
    order: SortOrderTypes;
  };
}
