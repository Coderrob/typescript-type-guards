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
import { isFunction } from '../isFunction';
import { isNullish } from '../isNullish';

/**
 * Determines whether the given property resolves to a callable value.
 *
 * @param value - The object or function to inspect.
 * @param propertyKey - The property name or symbol to read from `value`.
 * @returns `true` when `value[propertyKey]` is callable, `false` otherwise.
 */
export function hasCallableProperty(
  value: unknown,
  propertyKey: Readonly<PropertyKey>,
): boolean {
  if (!isObjectOrFunction(value)) return false;
  return isFunction(Reflect.get(value, propertyKey));
}

/**
 * Narrows a value to a non-null object or callable function.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is an object or function, `false` otherwise.
 */
function isObjectOrFunction(
  value: unknown,
): value is object | ((...args: unknown[]) => unknown) {
  if (isNullish(value)) return false;
  return typeof value === 'object' || isFunction(value);
}
