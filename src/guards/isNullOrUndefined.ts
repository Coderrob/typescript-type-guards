/**
 * Determines whether the given value is `null` or `undefined`.
 *
 * This is an alias for {@link isNullish} provided for semantic compatibility.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is `null` or `undefined`, `false` otherwise.
 */
export function isNullOrUndefined(value: unknown): value is null | undefined {
  return value === null || value === undefined;
}
