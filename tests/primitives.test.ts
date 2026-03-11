import {
  isString,
  isNumber,
  isFiniteNumber,
  isNaN,
  isBoolean,
  isNull,
  isUndefined,
  isNullOrUndefined,
  isSymbol,
  isBigInt,
  isNonEmptyString,
  isInteger,
} from '../src/primitives';

describe('Primitive type guards', () => {
  describe('isString', () => {
    it('returns true for a string literal', () => expect(isString('hello')).toBe(true));
    it('returns true for an empty string', () => expect(isString('')).toBe(true));
    it('returns true for a String object primitive value', () => {
      expect(isString(String('test'))).toBe(true);
    });
    it('returns false for a number', () => expect(isString(42)).toBe(false));
    it('returns false for null', () => expect(isString(null)).toBe(false));
    it('returns false for undefined', () => expect(isString(undefined)).toBe(false));
    it('returns false for a boolean', () => expect(isString(true)).toBe(false));
    it('returns false for an object', () => expect(isString({})).toBe(false));
  });

  describe('isNumber', () => {
    it('returns true for a positive number', () => expect(isNumber(42)).toBe(true));
    it('returns true for zero', () => expect(isNumber(0)).toBe(true));
    it('returns true for a negative number', () => expect(isNumber(-1)).toBe(true));
    it('returns true for a float', () => expect(isNumber(3.14)).toBe(true));
    it('returns false for NaN', () => expect(isNumber(NaN)).toBe(false));
    it('returns false for a string', () => expect(isNumber('42')).toBe(false));
    it('returns false for null', () => expect(isNumber(null)).toBe(false));
    it('returns false for undefined', () => expect(isNumber(undefined)).toBe(false));
    it('returns true for Infinity', () => expect(isNumber(Infinity)).toBe(true));
  });

  describe('isFiniteNumber', () => {
    it('returns true for a finite number', () => expect(isFiniteNumber(42)).toBe(true));
    it('returns false for Infinity', () => expect(isFiniteNumber(Infinity)).toBe(false));
    it('returns false for -Infinity', () => expect(isFiniteNumber(-Infinity)).toBe(false));
    it('returns false for NaN', () => expect(isFiniteNumber(NaN)).toBe(false));
    it('returns false for a string', () => expect(isFiniteNumber('42')).toBe(false));
  });

  describe('isNaN', () => {
    it('returns true for NaN', () => expect(isNaN(NaN)).toBe(true));
    it('returns false for a valid number', () => expect(isNaN(42)).toBe(false));
    it('returns false for a string', () => expect(isNaN('hello')).toBe(false));
    it('returns false for undefined', () => expect(isNaN(undefined)).toBe(false));
  });

  describe('isBoolean', () => {
    it('returns true for true', () => expect(isBoolean(true)).toBe(true));
    it('returns true for false', () => expect(isBoolean(false)).toBe(true));
    it('returns false for 1', () => expect(isBoolean(1)).toBe(false));
    it('returns false for 0', () => expect(isBoolean(0)).toBe(false));
    it('returns false for a string', () => expect(isBoolean('true')).toBe(false));
    it('returns false for null', () => expect(isBoolean(null)).toBe(false));
  });

  describe('isNull', () => {
    it('returns true for null', () => expect(isNull(null)).toBe(true));
    it('returns false for undefined', () => expect(isNull(undefined)).toBe(false));
    it('returns false for 0', () => expect(isNull(0)).toBe(false));
    it('returns false for an empty string', () => expect(isNull('')).toBe(false));
    it('returns false for false', () => expect(isNull(false)).toBe(false));
  });

  describe('isUndefined', () => {
    it('returns true for undefined', () => expect(isUndefined(undefined)).toBe(true));
    it('returns false for null', () => expect(isUndefined(null)).toBe(false));
    it('returns false for 0', () => expect(isUndefined(0)).toBe(false));
    it('returns false for an empty string', () => expect(isUndefined('')).toBe(false));
    it('returns false for false', () => expect(isUndefined(false)).toBe(false));
  });

  describe('isNullOrUndefined', () => {
    it('returns true for null', () => expect(isNullOrUndefined(null)).toBe(true));
    it('returns true for undefined', () => expect(isNullOrUndefined(undefined)).toBe(true));
    it('returns false for 0', () => expect(isNullOrUndefined(0)).toBe(false));
    it('returns false for an empty string', () => expect(isNullOrUndefined('')).toBe(false));
    it('returns false for false', () => expect(isNullOrUndefined(false)).toBe(false));
  });

  describe('isSymbol', () => {
    it('returns true for a symbol', () => expect(isSymbol(Symbol('test'))).toBe(true));
    it('returns true for Symbol.iterator', () => expect(isSymbol(Symbol.iterator)).toBe(true));
    it('returns false for a string', () => expect(isSymbol('symbol')).toBe(false));
    it('returns false for null', () => expect(isSymbol(null)).toBe(false));
  });

  describe('isBigInt', () => {
    it('returns true for a bigint', () => expect(isBigInt(BigInt(42))).toBe(true));
    it('returns true for BigInt literal', () => expect(isBigInt(9007199254740991n)).toBe(true));
    it('returns false for a number', () => expect(isBigInt(42)).toBe(false));
    it('returns false for a string', () => expect(isBigInt('42')).toBe(false));
  });

  describe('isNonEmptyString', () => {
    it('returns true for a non-empty string', () => expect(isNonEmptyString('hello')).toBe(true));
    it('returns false for an empty string', () => expect(isNonEmptyString('')).toBe(false));
    it('returns false for a number', () => expect(isNonEmptyString(42)).toBe(false));
    it('returns false for null', () => expect(isNonEmptyString(null)).toBe(false));
  });

  describe('isInteger', () => {
    it('returns true for an integer', () => expect(isInteger(5)).toBe(true));
    it('returns true for zero', () => expect(isInteger(0)).toBe(true));
    it('returns true for a negative integer', () => expect(isInteger(-3)).toBe(true));
    it('returns false for a float', () => expect(isInteger(3.14)).toBe(false));
    it('returns false for NaN', () => expect(isInteger(NaN)).toBe(false));
    it('returns false for a string', () => expect(isInteger('5')).toBe(false));
  });
});
