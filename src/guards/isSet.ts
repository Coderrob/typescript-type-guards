/**
 * Determines whether the given value is a `Set` instance.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a `Set`, `false` otherwise.
 */
export function isSet<T = unknown>(value: unknown): value is Set<T> {
  return value instanceof Set;
}
