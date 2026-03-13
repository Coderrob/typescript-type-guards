/**
 * Determines whether the given value is a `boolean`.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a boolean, `false` otherwise.
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}
