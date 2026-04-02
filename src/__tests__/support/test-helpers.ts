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
import { describe, expect, it } from 'vitest';
import { TypeGuard } from '../../guards/types';

export const FIXED_DATE = new Date('2020-01-01T00:00:00.000Z');
export const OTHER_DATE = new Date('2020-01-02T00:00:00.000Z');
export const INVALID_DATE = new Date('invalid');
export const NULL_PROTOTYPE_OBJECT = Object.create(null);
export const ZERO = Number('0');
export const ONE = Number('1');
export const TWO = Number('2');
export const THREE = Number('3');
export const POSITIVE_ONE_POINT_FIVE = Number('1.5');
export const NEGATIVE_FIVE_POINT_FIVE = Number('-5.5');
export const NEGATIVE_TEN = Number('-10');

export type GuardCase = Readonly<{
  description: string;
  value: unknown;
}>;

/**
 * Creates a labeled runtime test case for a guard contract.
 *
 * @param description - The human-readable case description.
 * @param value - The runtime value exercised by the case.
 * @returns A normalized guard test case.
 */
export function contractCase(description: string, value: unknown): GuardCase {
  return { description, value };
}

/**
 * Defines the shared positive and negative behavioral contract for a guard.
 *
 * @typeParam T - The narrowed type produced by the guard.
 * @param guard - The guard under test.
 * @param positiveUseCases - Values the guard is expected to accept.
 * @param negativeUseCases - Values the guard is expected to reject.
 * @returns Nothing. Registers Vitest cases as a side effect.
 */
export function describeBehavioralContract<T>(
  guard: TypeGuard<T> & Readonly<TypeGuard<T>>,
  positiveUseCases: readonly GuardCase[],
  negativeUseCases: readonly GuardCase[],
): void {
  describe('behavioral contract', () => {
    it('should accept documented positive use cases', () => {
      expectAcceptedCases(guard, positiveUseCases);
    });

    it('should reject documented negative use cases', () => {
      expectRejectedCases(guard, negativeUseCases);
    });
  });
}

/**
 * Defines a named top-level test module for a guard contract.
 *
 * @typeParam T - The narrowed type produced by the guard.
 * @param name - The human-readable module name.
 * @param guard - The guard under test.
 * @param positiveUseCases - Values the guard is expected to accept.
 * @param negativeUseCases - Values the guard is expected to reject.
 * @returns Nothing. Registers a Vitest `describe` block as a side effect.
 */
export function describeGuardModule<T>(
  name: string,
  guard: TypeGuard<T> & Readonly<TypeGuard<T>>,
  positiveUseCases: readonly GuardCase[],
  negativeUseCases: readonly GuardCase[],
): void {
  describe(name, () => {
    describeBehavioralContract(guard, positiveUseCases, negativeUseCases);
  });
}

/**
 * Asserts that a guard accepts every labeled runtime case in a collection.
 *
 * @typeParam T - The narrowed type produced by the guard.
 * @param guard - The guard under test.
 * @param testCases - The cases expected to pass the guard.
 * @returns Nothing. Throws via Vitest assertions when a case fails.
 */
function expectAcceptedCases<T>(
  guard: TypeGuard<T> & Readonly<TypeGuard<T>>,
  testCases: readonly GuardCase[],
): void {
  for (const { description, value } of testCases) {
    expect(guard(value), `Expected guard to accept ${description}`).toBe(true);
  }
}

/**
 * Asserts that a guard rejects every labeled runtime case in a collection.
 *
 * @typeParam T - The narrowed type produced by the guard.
 * @param guard - The guard under test.
 * @param testCases - The cases expected to fail the guard.
 * @returns Nothing. Throws via Vitest assertions when a case fails.
 */
function expectRejectedCases<T>(
  guard: TypeGuard<T> & Readonly<TypeGuard<T>>,
  testCases: readonly GuardCase[],
): void {
  for (const { description, value } of testCases) {
    expect(guard(value), `Expected guard to reject ${description}`).toBe(false);
  }
}
