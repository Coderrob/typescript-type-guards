import { TypeGuard } from './types';

/**
 * Creates a type guard that checks whether a value is a non-empty array where
 * every element satisfies the provided element type guard.
 *
 * @param guard - A type guard for the element type `T`.
 * @returns A type guard for `[T, ...T[]]`.
 *
 * @example
 * const isStrings = isNonEmptyArrayOf(isString);
 * isStrings(['a', 'b']); // true
 * isStrings([]);          // false
 */
export function isNonEmptyArrayOf<T>(guard: TypeGuard<T>): TypeGuard<[T, ...T[]]> {
  /**
   * Checks whether value is a non-empty array with every element satisfying the guard.
   * @param value - The value to test.
   * @returns `true` when value is non-empty and all elements pass the guard.
   */
  function isNonEmptyTypedArray(value: unknown): value is [T, ...T[]] {
    return Array.isArray(value) && value.length > 0 && value.every(guard);
  }
  return isNonEmptyTypedArray;
}
