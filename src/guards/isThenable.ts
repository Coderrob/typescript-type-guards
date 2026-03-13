/**
 * Narrows `value` to an indexable non-null object or function.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a non-null object or a callable function.
 */
function isObjectOrFunction(value: unknown): value is Record<PropertyKey, unknown> {
  return value !== null && (typeof value === 'object' || typeof value === 'function');
}

/**
 * Determines whether the given value is a thenable (duck-typed Promise).
 *
 * A thenable is any object or function with a callable `then` property,
 * per the Promises/A+ specification.
 *
 * @param value - The value to test.
 * @returns `true` when `value` has a callable `then` property, `false` otherwise.
 */
export function isThenable(value: unknown): value is PromiseLike<unknown> {
  if (!isObjectOrFunction(value)) {
    return false;
  }
  return typeof value['then'] === 'function';
}
