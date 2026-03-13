/**
 * Determines whether the given value is a valid (non-NaN) `Date` instance.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a `Date` with a valid time value, `false` otherwise.
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date && !Number.isNaN(value.getTime());
}
