import { Constructor, TypeGuard } from './types';

/**
 * Creates a type guard that checks whether a value is an instance of the given constructor.
 *
 * The returned function is named `is<ClassName>` at runtime (e.g. `isUser` for `class User {}`).
 *
 * @param constructor - A class constructor.
 * @returns A {@link TypeGuard} for instances of the given constructor.
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
