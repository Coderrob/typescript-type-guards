export function isSet<T = unknown>(value: unknown): value is Set<T> {
  return value instanceof Set;
}
