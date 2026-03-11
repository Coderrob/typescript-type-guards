import {
  isArray,
  isBigInt,
  isBoolean,
  isDate,
  isDefined,
  isError,
  isFunction,
  isMap,
  isNull,
  isNullish,
  isNumber,
  isObject,
  isPromise,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isUndefined,
} from '../index';

describe('isString', () => {
  it('returns true for strings', () => {
    expect(isString('hello')).toBe(true);
    expect(isString('')).toBe(true);
  });
  it('returns false for non-strings', () => {
    expect(isString(1)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
  });
});

describe('isNumber', () => {
  it('returns true for numbers', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-5.5)).toBe(true);
  });
  it('returns false for NaN and non-numbers', () => {
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber('1')).toBe(false);
    expect(isNumber(null)).toBe(false);
  });
});

describe('isBoolean', () => {
  it('returns true for booleans', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });
  it('returns false for non-booleans', () => {
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('true')).toBe(false);
  });
});

describe('isNull', () => {
  it('returns true for null', () => {
    expect(isNull(null)).toBe(true);
  });
  it('returns false for non-null values', () => {
    expect(isNull(undefined)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull('')).toBe(false);
  });
});

describe('isUndefined', () => {
  it('returns true for undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });
  it('returns false for non-undefined values', () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(0)).toBe(false);
  });
});

describe('isNullish', () => {
  it('returns true for null and undefined', () => {
    expect(isNullish(null)).toBe(true);
    expect(isNullish(undefined)).toBe(true);
  });
  it('returns false for defined values', () => {
    expect(isNullish(0)).toBe(false);
    expect(isNullish('')).toBe(false);
    expect(isNullish(false)).toBe(false);
  });
});

describe('isDefined', () => {
  it('returns true for defined values', () => {
    expect(isDefined(0)).toBe(true);
    expect(isDefined('')).toBe(true);
    expect(isDefined(false)).toBe(true);
  });
  it('returns false for null and undefined', () => {
    expect(isDefined(null)).toBe(false);
    expect(isDefined(undefined)).toBe(false);
  });
});

describe('isArray', () => {
  it('returns true for arrays', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
  });
  it('returns false for non-arrays', () => {
    expect(isArray({})).toBe(false);
    expect(isArray('array')).toBe(false);
    expect(isArray(null)).toBe(false);
  });
});

describe('isObject', () => {
  it('returns true for plain objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
  });
  it('returns false for non-objects', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject('string')).toBe(false);
  });
});

describe('isFunction', () => {
  it('returns true for functions', () => {
    expect(isFunction(() => void 0)).toBe(true);
    expect(isFunction(function () {})).toBe(true);
  });
  it('returns false for non-functions', () => {
    expect(isFunction({})).toBe(false);
    expect(isFunction('fn')).toBe(false);
  });
});

describe('isDate', () => {
  it('returns true for valid dates', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date('2020-01-01'))).toBe(true);
  });
  it('returns false for invalid or non-dates', () => {
    expect(isDate(new Date('invalid'))).toBe(false);
    expect(isDate('2020-01-01')).toBe(false);
    expect(isDate(null)).toBe(false);
  });
});

describe('isError', () => {
  it('returns true for Error instances', () => {
    expect(isError(new Error('oops'))).toBe(true);
    expect(isError(new TypeError('type'))).toBe(true);
  });
  it('returns false for non-errors', () => {
    expect(isError({ message: 'oops' })).toBe(false);
    expect(isError('error')).toBe(false);
  });
});

describe('isSymbol', () => {
  it('returns true for symbols', () => {
    expect(isSymbol(Symbol('s'))).toBe(true);
  });
  it('returns false for non-symbols', () => {
    expect(isSymbol('symbol')).toBe(false);
    expect(isSymbol(null)).toBe(false);
  });
});

describe('isBigInt', () => {
  it('returns true for bigints', () => {
    expect(isBigInt(BigInt(1))).toBe(true);
    expect(isBigInt(0n)).toBe(true);
  });
  it('returns false for non-bigints', () => {
    expect(isBigInt(1)).toBe(false);
    expect(isBigInt('1n')).toBe(false);
  });
});

describe('isRegExp', () => {
  it('returns true for RegExp instances', () => {
    expect(isRegExp(/abc/)).toBe(true);
    expect(isRegExp(new RegExp('abc'))).toBe(true);
  });
  it('returns false for non-regexp values', () => {
    expect(isRegExp('/abc/')).toBe(false);
    expect(isRegExp(null)).toBe(false);
  });
});

describe('isMap', () => {
  it('returns true for Map instances', () => {
    expect(isMap(new Map())).toBe(true);
  });
  it('returns false for non-map values', () => {
    expect(isMap({})).toBe(false);
    expect(isMap(null)).toBe(false);
  });
});

describe('isSet', () => {
  it('returns true for Set instances', () => {
    expect(isSet(new Set())).toBe(true);
  });
  it('returns false for non-set values', () => {
    expect(isSet([])).toBe(false);
    expect(isSet(null)).toBe(false);
  });
});

describe('isPromise', () => {
  it('returns true for Promise instances', () => {
    expect(isPromise(Promise.resolve())).toBe(true);
  });
  it('returns false for non-promise values', () => {
    expect(isPromise({ then: () => {} })).toBe(false);
    expect(isPromise(null)).toBe(false);
  });
});
