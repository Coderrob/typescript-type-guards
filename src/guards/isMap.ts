export function isMap<K = unknown, V = unknown>(
  value: unknown,
): value is Map<K, V> {
  return value instanceof Map;
}
