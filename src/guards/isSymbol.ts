/**
 * Determines whether the given value is a `symbol`.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a symbol, `false` otherwise.
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}
