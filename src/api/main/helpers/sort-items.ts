import { SortOrderTypes } from '../../domain/helpers/sort-param';

export function sortItems<T>(key: keyof T, order: SortOrderTypes = 'asc'): (arr: T[]) => T[] {
  return (arr) =>
    arr.sort((a, b) => {
      const main = order === 'asc' ? a[key] : b[key];
      const compare = order === 'asc' ? b[key] : a[key];

      return String(main).localeCompare(String(compare));
    });
}
