/**
 * Determines whether the given value is `null`.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is `null`, `false` otherwise.
 */
export function isNull(value: unknown): value is null {
  return value === null;
}
