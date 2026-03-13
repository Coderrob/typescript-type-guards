/**
 * Determines whether the given value is an `Array`.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is an array, `false` otherwise.
 */
export function isArray<T = unknown>(value: unknown): value is T[] {
  return Array.isArray(value);
}
