/**
 * Determines whether the given value is a callable function.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a function, `false` otherwise.
 */
export function isFunction(
  value: unknown,
): value is (...args: unknown[]) => unknown {
  return typeof value === 'function';
}
