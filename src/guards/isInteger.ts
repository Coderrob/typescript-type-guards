/**
 * Determines whether the given value is an integer number.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a finite integer, `false` otherwise.
 */
export function isInteger(value: unknown): value is number {
  return typeof value === 'number' && Number.isInteger(value);
}
