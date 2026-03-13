import { getEnumValues } from './getEnumValues';
import { EnumLike, TypeGuard } from './types';

/**
 * Creates a type guard that checks whether a value is one of the valid values
 * of the given enum.
 *
 * The returned function is named `is<EnumName>` at runtime when a name is provided.
 * Numeric TypeScript enums generate reverse-mapping keys (e.g. `{ A: 0, 0: 'A' }`);
 * this function filters to only the forward values.
 *
 * @param enumType - The enum object (e.g. `Direction`, `Color`).
 * @param enumName - Optional name used to derive the runtime function name.
 * @returns A {@link TypeGuard} for the union of all enum values.
 *
 * @example
 * enum Direction { Up = 'UP', Down = 'DOWN' }
 * const isDirection = createEnumGuard(Direction, 'Direction');
 * isDirection('UP');   // true
 * isDirection('LEFT'); // false
 */
export function createEnumGuard(
  enumType: EnumLike,
  enumName?: string,
): TypeGuard<string | number> {
  const enumValues = getEnumValues(enumType);
  const funcName = enumName ? `is${enumName}` : 'isEnumValue';
  const guard = {
    /**
     * Checks whether value is a valid enum member.
     * @param value - The value to test.
     * @returns `true` when value matches a forward enum value.
     */
    [funcName](value: unknown): value is string | number {
      if (typeof value !== 'string' && typeof value !== 'number') {
        return false;
      }
      return enumValues.includes(value);
    },
  };
  return guard[funcName];
}
