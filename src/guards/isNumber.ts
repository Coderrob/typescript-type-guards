/**
 * Determines whether the given value is a `number` (excluding `NaN`).
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a finite or infinite number (not NaN), `false` otherwise.
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value);
}
