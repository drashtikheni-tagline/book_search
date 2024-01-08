import { EMPTY_COUNT, EMPTY_VALUE, STRING } from "../constants/index.constant";

export const length = <T>(obj: T[] | null | undefined): number =>
  obj?.length || EMPTY_COUNT;

export const gt = (param1: number, param2: number = 0): boolean =>
  param1 > param2;

export const equal = <T>(obj1: T, obj2: T): boolean => obj1 === obj2;

export const head = <T>(obj: T[]): T | undefined => obj?.[0];

export const ternary = <T>(bool: boolean, truthy: T, falsy: T): T =>
  bool ? truthy : falsy;

export const isEmpty = (value: any): boolean => {
  if (equal(value, null) || equal(value, undefined)) return true;
  if (equal(typeof value, STRING) && equal(value.trim(), EMPTY_VALUE))
    return true;
  if (Array.isArray(value) && equal(length(value), EMPTY_COUNT)) return true;
  return false;
};
