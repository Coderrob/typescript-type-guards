/**
 * Determines whether the given value is a non-null, non-array plain object.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a non-null object that is not an array, `false` otherwise.
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
