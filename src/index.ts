/**
 * typescript-type-guards
 *
 * A comprehensive set of TypeScript type guards with generic factory functions
 * that allow you to create type guards for any class, interface shape, or enum.
 */

// Core types
export type { TypeGuard, Constructor, EnumLike } from './types';

// Primitive type guards
export {
  isString,
  isNumber,
  isFiniteNumber,
  isNaN,
  isBoolean,
  isNull,
  isUndefined,
  isNullOrUndefined,
  isSymbol,
  isBigInt,
  isNonEmptyString,
  isInteger,
} from './primitives';

// Object type guards
export {
  isObject,
  isFunction,
  isDate,
  isValidDate,
  isRegExp,
  isError,
  isMap,
  isSet,
  isPromise,
  isThenable,
} from './objects';

// Array type guards
export { isArray, isNonEmptyArray, isArrayOf, isNonEmptyArrayOf } from './arrays';

// Generic factory functions
export { createTypeGuard, createEnumGuard } from './generic';
