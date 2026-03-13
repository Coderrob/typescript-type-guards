/**
 * Represents a type guard function that narrows `unknown` to `T`.
 *
 * @typeParam T - The type that the guard narrows to.
 */
export type TypeGuard<T> = (value: unknown) => value is T;

/**
 * Represents a constructor (class) that produces instances of `T`.
 *
 * Uses `any[]` parameters for contravariant compatibility with concrete
 * constructors that have typed parameter lists.
 *
 * @typeParam T - The instance type produced by the constructor.
 */
export type Constructor<T> = new (...args: any[]) => T;

/**
 * Represents any enum-like object: a record mapping string keys to string or number values.
 */
export type EnumLike = Record<string, string | number>;
