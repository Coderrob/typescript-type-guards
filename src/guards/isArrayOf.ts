import { TypeGuard } from './types';

/**
 * Creates a type guard that checks whether a value is an array where every
 * element satisfies the provided element type guard.
 *
 * @param guard - A type guard for the element type `T`.
 * @returns A type guard for `T[]`.
 *
 * @example
 * const isStringArray = isArrayOf(isString);
 * isStringArray(['a', 'b']); // true
 * isStringArray(['a', 1]);   // false
 */
export function isArrayOf<T>(guard: TypeGuard<T>): TypeGuard<T[]> {
  /**
   * Checks whether every element of `value` satisfies the element guard.
   * @param value - The value to test.
   * @returns `true` when value is an array and every element passes the guard.
   */
  function isTypedArray(value: unknown): value is T[] {
    return Array.isArray(value) && value.every(guard);
  }
  return isTypedArray;
}
