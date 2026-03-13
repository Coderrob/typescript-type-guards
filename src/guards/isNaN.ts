/**
 * Determines whether the given value is `NaN`.
 *
 * Unlike the global `isNaN`, this only returns `true` for the numeric
 * `NaN` value and does not coerce non-numeric inputs.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is `NaN`, `false` otherwise.
 */
export function isNaN(value: unknown): value is number {
  return typeof value === 'number' && Number.isNaN(value);
}
