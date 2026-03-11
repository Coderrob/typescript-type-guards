import {
  isObject,
  isFunction,
  isDate,
  isValidDate,
  isRegExp,
  isError,
  isMap,
  isSet,
  isPromise,
  isThenable,
} from '../src/objects';

describe('Object type guards', () => {
  describe('isObject', () => {
    it('returns true for a plain object', () => expect(isObject({})).toBe(true));
    it('returns true for an object with properties', () => expect(isObject({ a: 1 })).toBe(true));
    it('returns false for null', () => expect(isObject(null)).toBe(false));
    it('returns false for an array', () => expect(isObject([])).toBe(false));
    it('returns false for a string', () => expect(isObject('hello')).toBe(false));
    it('returns false for a number', () => expect(isObject(42)).toBe(false));
    it('returns false for undefined', () => expect(isObject(undefined)).toBe(false));
    it('returns false for a function', () => expect(isObject(() => {})).toBe(false));
  });

  describe('isFunction', () => {
    it('returns true for an arrow function', () => expect(isFunction(() => {})).toBe(true));
    it('returns true for a regular function', () =>
      expect(isFunction(function () {})).toBe(true));
    it('returns true for a class constructor', () => {
      class Foo {}
      expect(isFunction(Foo)).toBe(true);
    });
    it('returns false for an object', () => expect(isFunction({})).toBe(false));
    it('returns false for null', () => expect(isFunction(null)).toBe(false));
    it('returns false for a string', () => expect(isFunction('fn')).toBe(false));
  });

  describe('isDate', () => {
    it('returns true for a Date instance', () => expect(isDate(new Date())).toBe(true));
    it('returns true for an invalid Date', () => expect(isDate(new Date('invalid'))).toBe(true));
    it('returns false for a date string', () => expect(isDate('2024-01-01')).toBe(false));
    it('returns false for a number (timestamp)', () => expect(isDate(Date.now())).toBe(false));
    it('returns false for null', () => expect(isDate(null)).toBe(false));
  });

  describe('isValidDate', () => {
    it('returns true for a valid Date', () => expect(isValidDate(new Date())).toBe(true));
    it('returns false for an invalid Date', () =>
      expect(isValidDate(new Date('invalid'))).toBe(false));
    it('returns false for a date string', () => expect(isValidDate('2024-01-01')).toBe(false));
    it('returns false for null', () => expect(isValidDate(null)).toBe(false));
  });

  describe('isRegExp', () => {
    it('returns true for a RegExp literal', () => expect(isRegExp(/abc/)).toBe(true));
    it('returns true for a RegExp instance', () => expect(isRegExp(new RegExp('abc'))).toBe(true));
    it('returns false for a string', () => expect(isRegExp('/abc/')).toBe(false));
    it('returns false for null', () => expect(isRegExp(null)).toBe(false));
  });

  describe('isError', () => {
    it('returns true for an Error instance', () => expect(isError(new Error('oops'))).toBe(true));
    it('returns true for a TypeError', () => expect(isError(new TypeError('oops'))).toBe(true));
    it('returns true for a RangeError', () => expect(isError(new RangeError('oops'))).toBe(true));
    it('returns false for a string', () => expect(isError('error')).toBe(false));
    it('returns false for an error-like object', () =>
      expect(isError({ message: 'oops' })).toBe(false));
    it('returns false for null', () => expect(isError(null)).toBe(false));
  });

  describe('isMap', () => {
    it('returns true for a Map instance', () => expect(isMap(new Map())).toBe(true));
    it('returns true for a non-empty Map', () => {
      const m = new Map([['key', 'value']]);
      expect(isMap(m)).toBe(true);
    });
    it('returns false for a plain object', () => expect(isMap({})).toBe(false));
    it('returns false for an array', () => expect(isMap([])).toBe(false));
    it('returns false for null', () => expect(isMap(null)).toBe(false));
  });

  describe('isSet', () => {
    it('returns true for a Set instance', () => expect(isSet(new Set())).toBe(true));
    it('returns true for a non-empty Set', () => {
      const s = new Set([1, 2, 3]);
      expect(isSet(s)).toBe(true);
    });
    it('returns false for an array', () => expect(isSet([1, 2, 3])).toBe(false));
    it('returns false for null', () => expect(isSet(null)).toBe(false));
  });

  describe('isPromise', () => {
    it('returns true for a Promise instance', () =>
      expect(isPromise(Promise.resolve())).toBe(true));
    it('returns true for a rejected Promise', () => {
      const p = Promise.reject(new Error('rejected'));
      p.catch(() => {}); // prevent unhandled rejection
      expect(isPromise(p)).toBe(true);
    });
    it('returns false for a plain object with then', () =>
      expect(isPromise({ then: () => {} })).toBe(false));
    it('returns false for null', () => expect(isPromise(null)).toBe(false));
  });

  describe('isThenable', () => {
    it('returns true for a Promise instance', () =>
      expect(isThenable(Promise.resolve())).toBe(true));
    it('returns true for a plain object with a then method', () =>
      expect(isThenable({ then: () => {} })).toBe(true));
    it('returns false for an object without then', () => expect(isThenable({})).toBe(false));
    it('returns false for an object with non-function then', () =>
      expect(isThenable({ then: 'not a function' })).toBe(false));
    it('returns false for null', () => expect(isThenable(null)).toBe(false));
    it('returns false for a string', () => expect(isThenable('thenable')).toBe(false));
  });
});
