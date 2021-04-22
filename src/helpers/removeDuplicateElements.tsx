export function removeDuplicateElems<O>(array: O[], key: keyof O): O[] {
  return array.filter((v, i, arr) => arr.findIndex((v2) => v2[key] === v[key]) === i);
}
