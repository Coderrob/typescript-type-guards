/**
 * Determines whether the given value is a `bigint`.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a bigint, `false` otherwise.
 */
export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint';
}
