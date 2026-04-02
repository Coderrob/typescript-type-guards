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
import { Constructor, TypeGuard } from './types';

/**
 * Creates a type guard that checks whether a value is an instance of the given constructor.
 *
 * The returned function is named `is<ClassName>` at runtime (e.g. `isUser` for `class User {}`).
 * When the constructor name is empty, the guard falls back to `isType` unless
 * an explicit `typeName` is provided.
 *
 * @param constructor - A class constructor.
 * @param typeName - Optional explicit name used to derive the runtime function name.
 * @returns A {@link TypeGuard} for instances of the given constructor.
 *
 * @example
 * class User { constructor(public name: string) {} }
 * const isUser = createTypeGuard(User);
 * isUser(new User('Alice')); // true
 * isUser({ name: 'Alice' }); // false
 *
 * @example
 * const isAnonymousThing = createTypeGuard(AnonymousThing, 'AnonymousThing');
 */
export function createTypeGuard<T>(
  constructor: Constructor<T> & Readonly<Constructor<T>>,
  typeName?: string,
): TypeGuard<T> {
  const resolvedTypeName = typeName || constructor.name || 'Type';
  const guardName = `is${resolvedTypeName}`;
  const guard = {
    /**
     * Type guard that checks whether value is an instance of the constructor.
     * @param value - The value to test.
     * @returns `true` when value is an instance of the constructor.
     */
    [guardName](value: unknown): value is T {
      return value instanceof constructor;
    },
  };
  return guard[guardName];
}
