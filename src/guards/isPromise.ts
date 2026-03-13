/**
 * Determines whether the given value is a native `Promise` instance.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a `Promise`, `false` otherwise.
 */
export function isPromise<T = unknown>(value: unknown): value is Promise<T> {
  return value instanceof Promise;
}
