/**
 * Determines whether the given value is a `Map` instance.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a `Map`, `false` otherwise.
 */
export function isMap<K = unknown, V = unknown>(
  value: unknown,
): value is Map<K, V> {
  return value instanceof Map;
}
