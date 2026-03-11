/**
 * TypeGuard is a function that narrows the type of `value` to `T`.
 */
export type TypeGuard<T> = (value: unknown) => value is T;

/**
 * Constructor type for use with instanceof-based type guards.
 * Uses `any[]` for parameters to allow contravariant compatibility with
 * concrete class constructors that have typed parameters.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type Constructor<T> = new (...args: any[]) => T;

/**
 * Represents any enum-like object: a record of string keys to string or number values.
 */
export type EnumLike = Record<string, string | number>;
