/**
 * Determines whether the given value is an `Error` instance.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is an `Error`, `false` otherwise.
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error;
}
