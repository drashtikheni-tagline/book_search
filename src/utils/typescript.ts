export const length = <T>(obj: T[] | null | undefined): number =>
  obj?.length || 0;

export const gt = (param1: number, param2: number = 0): boolean =>
  param1 > param2;

export const equal = <T>(obj1: T, obj2: T): boolean => obj1 === obj2;
