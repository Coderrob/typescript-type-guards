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
 * Represents a type guard function that narrows `unknown` to `T`.
 *
 * @typeParam T - The type that the guard narrows to.
 */
export type TypeGuard<T> = (value: unknown) => value is T;

/**
 * Represents a constructor (class) that produces instances of `T`.
 *
 * Uses `any[]` parameters for contravariant compatibility with concrete
 * constructors that have typed parameter lists.
 *
 * @typeParam T - The instance type produced by the constructor.
 */
export type Constructor<T> = new (...args: any[]) => T;

/**
 * Represents any enum-like object: a record mapping string keys to string or number values.
 */
export type EnumLike = Record<string, string | number>;

/**
 * Extracts the union of values from an enum-like object.
 *
 * When used with a TypeScript enum object, this preserves the enum's
 * specific value union for callers of generic helpers.
 *
 * @typeParam TEnum - The enum-like object type.
 */
export type EnumValue<TEnum extends EnumLike> =
  TEnum extends Record<string, infer TValue>
    ? Extract<TValue, string | number>
    : never;
