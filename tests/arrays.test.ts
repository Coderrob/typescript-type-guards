import { isArray, isNonEmptyArray, isArrayOf, isNonEmptyArrayOf } from '../src/arrays';
import { isString, isNumber, isBoolean } from '../src/primitives';

describe('Array type guards', () => {
  describe('isArray', () => {
    it('returns true for an empty array', () => expect(isArray([])).toBe(true));
    it('returns true for an array of numbers', () => expect(isArray([1, 2, 3])).toBe(true));
    it('returns true for an array of mixed types', () =>
      expect(isArray([1, 'two', true])).toBe(true));
    it('returns false for an object', () => expect(isArray({})).toBe(false));
    it('returns false for a string', () => expect(isArray('array')).toBe(false));
    it('returns false for null', () => expect(isArray(null)).toBe(false));
    it('returns false for undefined', () => expect(isArray(undefined)).toBe(false));
  });

  describe('isNonEmptyArray', () => {
    it('returns true for an array with one element', () =>
      expect(isNonEmptyArray([1])).toBe(true));
    it('returns true for an array with multiple elements', () =>
      expect(isNonEmptyArray([1, 2, 3])).toBe(true));
    it('returns false for an empty array', () => expect(isNonEmptyArray([])).toBe(false));
    it('returns false for null', () => expect(isNonEmptyArray(null)).toBe(false));
    it('returns false for a string', () => expect(isNonEmptyArray('array')).toBe(false));
  });

  describe('isArrayOf', () => {
    const isStringArray = isArrayOf(isString);
    const isNumberArray = isArrayOf(isNumber);
    const isBooleanArray = isArrayOf(isBoolean);

    it('returns true for an array of strings', () =>
      expect(isStringArray(['a', 'b', 'c'])).toBe(true));
    it('returns true for an empty array', () => expect(isStringArray([])).toBe(true));
    it('returns false for an array with a non-string element', () =>
      expect(isStringArray(['a', 1])).toBe(false));
    it('returns false for an array of numbers when expecting strings', () =>
      expect(isStringArray([1, 2, 3])).toBe(false));

    it('returns true for an array of numbers', () =>
      expect(isNumberArray([1, 2, 3])).toBe(true));
    it('returns false for an array of strings when expecting numbers', () =>
      expect(isNumberArray(['a', 'b'])).toBe(false));

    it('returns true for an array of booleans', () =>
      expect(isBooleanArray([true, false, true])).toBe(true));
    it('returns false for a mixed array when expecting booleans', () =>
      expect(isBooleanArray([true, 1])).toBe(false));

    it('returns false for null', () => expect(isStringArray(null)).toBe(false));
    it('returns false for a string', () => expect(isStringArray('hello')).toBe(false));
  });

  describe('isNonEmptyArrayOf', () => {
    const isNonEmptyStringArray = isNonEmptyArrayOf(isString);

    it('returns true for a non-empty array of strings', () =>
      expect(isNonEmptyStringArray(['a', 'b'])).toBe(true));
    it('returns false for an empty array', () => expect(isNonEmptyStringArray([])).toBe(false));
    it('returns false for a mixed array', () =>
      expect(isNonEmptyStringArray(['a', 1])).toBe(false));
    it('returns false for null', () => expect(isNonEmptyStringArray(null)).toBe(false));
  });
});
