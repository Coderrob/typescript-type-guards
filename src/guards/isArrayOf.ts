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
import { TypeGuard } from './types';

/**
 * Creates a type guard that checks whether a value is an array where every
 * element satisfies the provided element type guard.
 *
 * @param guard - A type guard for the element type `T`.
 * @returns A type guard for `T[]`.
 *
 * @example
 * const isStringArray = isArrayOf(isString);
 * isStringArray(['a', 'b']); // true
 * isStringArray(['a', 1]);   // false
 */
export function isArrayOf<T>(guard: TypeGuard<T>): TypeGuard<T[]> {
  /**
   * Checks whether every element of `value` satisfies the element guard.
   * @param value - The value to test.
   * @returns `true` when value is an array and every element passes the guard.
   */
  function isTypedArray(value: unknown): value is T[] {
    return Array.isArray(value) && value.every(guard);
  }
  return isTypedArray;
}
