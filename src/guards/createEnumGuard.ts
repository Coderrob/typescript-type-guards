/*
 * Copyright 2026 Robert Lindley
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { getEnumValues } from './getEnumValues';
import { isNumber } from './isNumber';
import { isString } from './isString';
import { EnumLike, EnumValue, TypeGuard } from './types';

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
export function createEnumGuard<TEnum extends EnumLike>(
  enumType: Readonly<TEnum>,
  enumName?: string,
): TypeGuard<EnumValue<TEnum>> {
  const enumValueSet = new Set(getEnumValues(enumType));
  const funcName = getEnumGuardName(enumName);
  const guard = {
    /**
     * Checks whether value is a valid enum member.
     * @param value - The value to test.
     * @returns `true` when value matches a forward enum value.
     */
    [funcName](value: unknown): value is EnumValue<TEnum> {
      return hasEnumValue<TEnum>(enumValueSet, value);
    },
  };
  return guard[funcName];
}

/**
 * Returns the runtime name used for an enum guard.
 *
 * @param enumName - Optional enum name provided by the caller.
 * @returns The generated function name.
 */
function getEnumGuardName(enumName?: string): string {
  return enumName ? `is${enumName}` : 'isEnumValue';
}

/**
 * Checks whether a value is a string or number present in the enum value set.
 *
 * @typeParam TEnum - The enum-like object type.
 * @param enumValueSet - The precomputed set of forward enum values.
 * @param value - The value to test.
 * @returns `true` when value matches an enum member.
 */
function hasEnumValue<TEnum extends EnumLike>(
  enumValueSet: Readonly<ReadonlySet<string | number>>,
  value: unknown,
): value is EnumValue<TEnum> {
  return isEnumValueCandidate(value) && enumValueSet.has(value);
}

/**
 * Determines whether a runtime value can match an enum member.
 *
 * This composes the primitive guards directly from sibling modules rather than
 * re-exporting through `index.ts`, which avoids introducing a barrel cycle.
 *
 * @param value - The value to test.
 * @returns `true` when the value is a string or non-NaN number.
 */
function isEnumValueCandidate(value: unknown): value is string | number {
  return isString(value) || isNumber(value);
}
