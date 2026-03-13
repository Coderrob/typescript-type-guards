/**
 * Determines whether the given value is a non-empty string.
 *
 * A non-empty string is a string with at least one character.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a string with length greater than zero, `false` otherwise.
 */
export function isNonEmptyString(value: unknown): value is string {
  return typeof value === 'string' && value.length > 0;
}
