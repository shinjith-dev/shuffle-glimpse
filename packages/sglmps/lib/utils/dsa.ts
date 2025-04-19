export function getNestedValue(obj: Record<string, any>, path: string): any {
  return path.split(".").reduce((acc, key) => {
    return acc?.[key];
  }, obj);
}
