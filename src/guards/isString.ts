/**
 * Determines whether the given value is a `string`.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a string, `false` otherwise.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}
