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
import {
  hasPlainObjectPrototype,
  isNonArrayObject,
} from './internal/objectHelpers';

/**
 * Determines whether the given value is a plain object with an object or null prototype.
 *
 * @param value - The value to test.
 * @returns `true` when `value` is a plain object, `false` otherwise.
 */
export function isPlainObject(
  value: unknown,
): value is Record<string, unknown> {
  if (!isNonArrayObject(value)) return false;
  return hasPlainObjectPrototype(value);
}
