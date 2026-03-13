/**
 * Determines whether the given value is a `RegExp` instance.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a `RegExp`, `false` otherwise.
 */
export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp;
}
