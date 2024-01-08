import { EMPTY_COUNT } from "../constants/index.constant";

export const length = <T>(obj: T[] | null | undefined): number =>
  obj?.length || EMPTY_COUNT;

export const gt = (param1: number, param2: number = 0): boolean =>
  param1 > param2;

export const equal = <T>(obj1: T, obj2: T): boolean => obj1 === obj2;

export const head = <T>(obj: T[]): T | undefined => obj?.[0];

export const ternary = <T>(bool: boolean, truthy: T, falsy: T): T =>
  bool ? truthy : falsy;
