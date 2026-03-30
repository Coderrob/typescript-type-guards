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
/**
 * Checks whether an object has a plain-object prototype.
 *
 * @param value - The object to inspect.
 * @returns `true` when the object prototype is `Object.prototype` or `null`.
 */
function hasPlainObjectPrototype(value: object): boolean {
  const prototype = Object.getPrototypeOf(value);
  return prototype === Object.prototype || prototype === null;
}

/**
 * Checks whether a value is a non-null object and not an array.
 *
 * @param value - The value to inspect.
 * @returns `true` when the value is object-like for plain-object checks.
 */
export function isObject(value: unknown): value is Record<string, unknown> {
  return isObjectLike(value) && hasPlainObjectPrototype(value);
}

/**
 * Determines whether the given value is a non-null, non-array plain object.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a non-null object that is not an array, `false` otherwise.
 */
function isObjectLike(value: unknown): value is object {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}
