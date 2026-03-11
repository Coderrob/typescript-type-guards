import { Constructor, EnumLike, TypeGuard } from './types';

/**
 * Creates a type guard that checks whether a value is an instance of the given constructor.
 *
 * The returned function is named `is<ClassName>` at runtime (e.g. `isUser` for `class User {}`).
 *
 * @param constructor - A class/constructor function.
 * @returns A TypeGuard for instances of the given constructor.
 *
 * @example
 * class User { constructor(public name: string) {} }
 * const isUser = createTypeGuard(User);
 * isUser(new User('Alice')); // true
 * isUser({ name: 'Alice' }); // false
 */
export function createTypeGuard<T>(constructor: Constructor<T>): TypeGuard<T> {
  const guardName = `is${constructor.name}`;
  const guard = {
    [guardName](value: unknown): value is T {
      return value instanceof constructor;
    },
  };
  return guard[guardName];
}

/**
 * Creates a type guard that checks whether a value is one of the valid values of the given enum.
 *
 * The returned function is named `is<EnumName>` at runtime when the enum name is provided.
 *
 * Numeric TypeScript enums generate reverse-mapping keys (e.g. `{ A: 0, 0: 'A' }`), so
 * this function filters to only the "forward" values (the non-reverse-mapping side).
 *
 * @param enumType - The enum object (e.g. `Direction`, `Color`).
 * @param enumName - Optional name used for the runtime function name (`is<enumName>`).
 * @returns A TypeGuard for the union of all enum values.
 *
 * @example
 * enum Direction { Up = 'UP', Down = 'DOWN' }
 * const isDirection = createEnumGuard(Direction);
 * isDirection('UP');   // true
 * isDirection('LEFT'); // false
 *
 * @example
 * enum Status { Active = 1, Inactive = 2 }
 * const isStatus = createEnumGuard(Status, 'Status');
 * isStatus(1); // true
 * isStatus(3); // false
 */
export function createEnumGuard<T extends EnumLike>(
  enumType: T,
  enumName?: string,
): TypeGuard<T[keyof T]> {
  const enumValues = getEnumValues(enumType);
  const funcName = enumName ? `is${enumName}` : 'isEnumValue';
  const guard = {
    [funcName](value: unknown): value is T[keyof T] {
      return enumValues.includes(value as T[keyof T]);
    },
  };
  return guard[funcName];
}

/**
 * Extracts the "forward" values of an enum, excluding numeric reverse-mapping keys.
 *
 * For a numeric enum `{ A: 0, 0: 'A' }`, this returns `[0]`.
 * For a string enum `{ Up: 'UP' }`, this returns `['UP']`.
 * For a heterogeneous enum, both string and numeric forward values are returned.
 *
 * @internal
 */
function getEnumValues<T extends EnumLike>(enumType: T): T[keyof T][] {
  const allKeys = Object.keys(enumType);

  // Numeric enums have reverse mappings: numeric string keys pointing back to the name.
  // We identify these by checking whether the value at a numeric key is a string key
  // that points back to the original numeric value.
  const reverseKeys = new Set<string>(
    allKeys.filter((key) => {
      const numKey = Number(key);
      return !Number.isNaN(numKey) && enumType[enumType[key] as string] === numKey;
    }),
  );

  return allKeys
    .filter((key) => !reverseKeys.has(key))
    .map((key) => enumType[key] as T[keyof T]);
}
