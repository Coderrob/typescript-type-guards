/**
 * Determines whether the given value is neither `null` nor `undefined`.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is not null or undefined, `false` otherwise.
 */
export function isDefined<T>(
  value: T | null | undefined,
): value is NonNullable<T> {
  return value !== null && value !== undefined;
}
