/**
 * Determines whether the given value is a non-empty array.
 *
 * A non-empty array has at least one element.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is an array with at least one element, `false` otherwise.
 */
export function isNonEmptyArray(value: unknown): value is [unknown, ...unknown[]] {
  return Array.isArray(value) && value.length > 0;
}
