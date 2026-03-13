/**
 * Determines whether the given value is `undefined`.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is `undefined`, `false` otherwise.
 */
export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined';
}
