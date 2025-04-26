export function getNestedValue(obj: Record<string, any>, path: string): any {
  return path.split(".").reduce((acc, key) => {
    return acc?.[key];
  }, obj);
}

export const maxOfArray = <T extends Record<string, any>>(
  arr?: T[],
  key?: keyof T,
) => {
  if (!arr || !key) return undefined;
  return arr.reduce((max, item) => (item[key] > max[key] ? item : max));
};
