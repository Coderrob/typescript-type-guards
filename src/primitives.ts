/**
 * Type guards for JavaScript/TypeScript primitive types.
 */

/**
 * Determines whether the given value is a `string`.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string';
}

/**
 * Determines whether the given value is a `number` (excluding `NaN`).
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number' && !Number.isNaN(value);
}

/**
 * Determines whether the given value is a finite `number`.
 */
export function isFiniteNumber(value: unknown): value is number {
  return isNumber(value) && Number.isFinite(value);
}

/**
 * Determines whether the given value is `NaN`.
 */
export function isNaN(value: unknown): value is number {
  return typeof value === 'number' && Number.isNaN(value);
}

/**
 * Determines whether the given value is a `boolean`.
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean';
}

/**
 * Determines whether the given value is `null`.
 */
export function isNull(value: unknown): value is null {
  return value === null;
}

/**
 * Determines whether the given value is `undefined`.
 */
export function isUndefined(value: unknown): value is undefined {
  return typeof value === 'undefined';
}

/**
 * Determines whether the given value is `null` or `undefined`.
 */
export function isNullOrUndefined(value: unknown): value is null | undefined {
  return isNull(value) || isUndefined(value);
}

/**
 * Determines whether the given value is a `symbol`.
 */
export function isSymbol(value: unknown): value is symbol {
  return typeof value === 'symbol';
}

/**
 * Determines whether the given value is a `bigint`.
 */
export function isBigInt(value: unknown): value is bigint {
  return typeof value === 'bigint';
}

/**
 * Determines whether the given value is a non-empty string.
 */
export function isNonEmptyString(value: unknown): value is string {
  return isString(value) && value.length > 0;
}

/**
 * Determines whether the given value is an integer number.
 */
export function isInteger(value: unknown): value is number {
  return isNumber(value) && Number.isInteger(value);
}
