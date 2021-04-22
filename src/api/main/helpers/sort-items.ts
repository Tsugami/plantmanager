import { SortOrderTypes } from '../../domain/helpers/sort-param';

export function sortItems<T>(key: keyof T, order: SortOrderTypes = 'asc'): (arr: T[]) => T[] {
  return (arr) => arr.sort((a, b) => String(a[key]).localeCompare(String(b[key])));
}
