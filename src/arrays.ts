import { TypeGuard } from './types';

/**
 * Type guards for arrays.
 */

/**
 * Determines whether the given value is an `Array`.
 */
export function isArray(value: unknown): value is unknown[] {
  return Array.isArray(value);
}

/**
 * Determines whether the given value is a non-empty array.
 * A non-empty array has at least one element.
 */
export function isNonEmptyArray(value: unknown): value is [unknown, ...unknown[]] {
  return isArray(value) && value.length > 0;
}

/**
 * Creates a type guard that checks whether the given value is an array
 * where every element satisfies the provided element type guard.
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
  return (value: unknown): value is T[] => isArray(value) && value.every(guard);
}

/**
 * Creates a type guard that checks whether the given value is a non-empty array
 * where every element satisfies the provided element type guard.
 *
 * @param guard - A type guard for the element type `T`.
 * @returns A type guard for `[T, ...T[]]`.
 */
export function isNonEmptyArrayOf<T>(guard: TypeGuard<T>): TypeGuard<[T, ...T[]]> {
  return (value: unknown): value is [T, ...T[]] =>
    isArray(value) && value.length > 0 && value.every(guard);
}
