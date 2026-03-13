/**
 * Type guards for JavaScript/TypeScript object types.
 */

/**
 * Determines whether the given value is a non-null object.
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

/**
 * Determines whether the given value is a `Function`.
 */
// eslint-disable-next-line @typescript-eslint/ban-types
export function isFunction(value: unknown): value is Function {
  return typeof value === 'function';
}

/**
 * Determines whether the given value is a `Date` instance.
 */
export function isDate(value: unknown): value is Date {
  return value instanceof Date;
}

/**
 * Determines whether the given value is a valid (non-NaN) `Date` instance.
 */
export function isValidDate(value: unknown): value is Date {
  return isDate(value) && !Number.isNaN(value.getTime());
}

/**
 * Determines whether the given value is a `RegExp` instance.
 */
export function isRegExp(value: unknown): value is RegExp {
  return value instanceof RegExp;
}

/**
 * Determines whether the given value is an `Error` instance.
 */
export function isError(value: unknown): value is Error {
  return value instanceof Error;
}

/**
 * Determines whether the given value is a `Map` instance.
 */
export function isMap(value: unknown): value is Map<unknown, unknown> {
  return value instanceof Map;
}

/**
 * Determines whether the given value is a `Set` instance.
 */
export function isSet(value: unknown): value is Set<unknown> {
  return value instanceof Set;
}

/**
 * Determines whether the given value is a `Promise` instance.
 */
export function isPromise(value: unknown): value is Promise<unknown> {
  return value instanceof Promise;
}

/**
 * Determines whether the given value is a thenable (duck-typed Promise).
 */
export function isThenable(value: unknown): value is PromiseLike<unknown> {
  return (
    (isObject(value) || isFunction(value)) &&
    'then' in value &&
    typeof (value as { then: unknown }).then === 'function'
  );
}
