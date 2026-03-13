import { EnumLike } from './types';

/**
 * Extracts the forward values of an enum, excluding numeric reverse-mapping keys.
 *
 * TypeScript numeric enums generate reverse mappings: `{ A: 0, 0: 'A' }`.
 * This helper returns only the forward values (e.g. `[0]` for `{ A: 0 }`).
 *
 * @param enumType - The enum object to extract values from.
 * @returns An array of forward enum values.
 */
export function getEnumValues(enumType: EnumLike): (string | number)[] {
  return Object.entries(enumType).filter(isForwardEntry).map(toEnumValue);
}

/**
 * Returns `true` when the entry is a forward-mapped enum member (not a reverse key).
 *
 * @param entry - A key-value tuple from the enum object.
 * @returns `true` when the entry is not a numeric reverse-mapping key.
 */
function isForwardEntry([key, value]: [string, string | number]): boolean {
  return !isReverseMappedKey(key, value);
}

/**
 * Returns `true` when the key-value pair is a numeric reverse-mapping entry.
 *
 * TypeScript generates reverse mappings for numeric enums so that
 * numeric string keys (e.g. `'1'`) map back to the name (e.g. `'Active'`).
 *
 * @param key - The enum object key to inspect.
 * @param value - The value stored at that key.
 * @returns `true` when key is a numeric string and value is a string.
 */
function isReverseMappedKey(key: string, value: string | number): boolean {
  return !Number.isNaN(Number(key)) && typeof value === 'string';
}

/**
 * Extracts the value from a key-value entry.
 *
 * @param entry - A key-value tuple from the enum object.
 * @returns The enum value.
 */
function toEnumValue([, value]: [string, string | number]): string | number {
  return value;
}
