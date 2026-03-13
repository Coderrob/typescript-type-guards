/**
 * Determines whether the given value is a finite `number`.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a finite number, `false` otherwise.
 */
export function isFiniteNumber(value: unknown): value is number {
  return typeof value === 'number' && Number.isFinite(value);
}
