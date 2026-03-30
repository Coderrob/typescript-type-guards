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
  createEnumGuard,
  createTypeGuard,
  isArray,
  isArrayOf,
  isBigInt,
  isBoolean,
  isDate,
  isDefined,
  isError,
  isFiniteNumber,
  isFunction,
  isInteger,
  isMap,
  isNaN,
  isNonEmptyArray,
  isNonEmptyArrayOf,
  isNonEmptyString,
  isNull,
  isNullish,
  isNullOrUndefined,
  isNumber,
  isObject,
  isPromise,
  isRegExp,
  isSet,
  isString,
  isSymbol,
  isThenable,
  isUndefined,
  isValidDate,
} from '../index';

describe('isString', () => {
  it('should return true for strings', () => {
    expect(isString('hello')).toBe(true);
    expect(isString('')).toBe(true);
  });
  it('should return false for non-strings', () => {
    expect(isString(1)).toBe(false);
    expect(isString(null)).toBe(false);
    expect(isString(undefined)).toBe(false);
  });
});

describe('isNumber', () => {
  it('should return true for numbers', () => {
    expect(isNumber(1)).toBe(true);
    expect(isNumber(0)).toBe(true);
    expect(isNumber(-5.5)).toBe(true);
  });
  it('should return false for NaN and non-numbers', () => {
    expect(isNumber(NaN)).toBe(false);
    expect(isNumber('1')).toBe(false);
    expect(isNumber(null)).toBe(false);
  });
});

describe('isFiniteNumber', () => {
  it('should return true for finite numbers', () => {
    expect(isFiniteNumber(1)).toBe(true);
    expect(isFiniteNumber(0)).toBe(true);
  });
  it('should return false for Infinity, NaN, and non-numbers', () => {
    expect(isFiniteNumber(Infinity)).toBe(false);
    expect(isFiniteNumber(NaN)).toBe(false);
    expect(isFiniteNumber('1')).toBe(false);
  });
});

describe('isNaN', () => {
  it('should return true for NaN', () => {
    expect(isNaN(NaN)).toBe(true);
  });
  it('should return false for numbers and non-numbers', () => {
    expect(isNaN(1)).toBe(false);
    expect(isNaN('NaN')).toBe(false);
    expect(isNaN(undefined)).toBe(false);
  });
});

describe('isInteger', () => {
  it('should return true for integer numbers', () => {
    expect(isInteger(1)).toBe(true);
    expect(isInteger(0)).toBe(true);
  });
  it('should return false for floats and non-numbers', () => {
    expect(isInteger(1.5)).toBe(false);
    expect(isInteger('1')).toBe(false);
  });
});

describe('isBoolean', () => {
  it('should return true for booleans', () => {
    expect(isBoolean(true)).toBe(true);
    expect(isBoolean(false)).toBe(true);
  });
  it('should return false for non-booleans', () => {
    expect(isBoolean(1)).toBe(false);
    expect(isBoolean('true')).toBe(false);
  });
});

describe('isNull', () => {
  it('should return true for null', () => {
    expect(isNull(null)).toBe(true);
  });
  it('should return false for non-null values', () => {
    expect(isNull(undefined)).toBe(false);
    expect(isNull(0)).toBe(false);
    expect(isNull('')).toBe(false);
  });
});

describe('isUndefined', () => {
  it('should return true for undefined', () => {
    expect(isUndefined(undefined)).toBe(true);
  });
  it('should return false for non-undefined values', () => {
    expect(isUndefined(null)).toBe(false);
    expect(isUndefined(0)).toBe(false);
  });
});

describe('isNullish', () => {
  it('should return true for null and undefined', () => {
    expect(isNullish(null)).toBe(true);
    expect(isNullish(undefined)).toBe(true);
  });
  it('should return false for defined values', () => {
    expect(isNullish(0)).toBe(false);
    expect(isNullish('')).toBe(false);
    expect(isNullish(false)).toBe(false);
  });
});

describe('isNullOrUndefined', () => {
  it('should return true for null and undefined', () => {
    expect(isNullOrUndefined(null)).toBe(true);
    expect(isNullOrUndefined(undefined)).toBe(true);
  });
  it('should return false for defined values', () => {
    expect(isNullOrUndefined(0)).toBe(false);
    expect(isNullOrUndefined('')).toBe(false);
  });
});

describe('isDefined', () => {
  it('should return true for defined values', () => {
    expect(isDefined(0)).toBe(true);
    expect(isDefined('')).toBe(true);
    expect(isDefined(false)).toBe(true);
  });
  it('should return false for null and undefined', () => {
    expect(isDefined(null)).toBe(false);
    expect(isDefined(undefined)).toBe(false);
  });
});

describe('isNonEmptyString', () => {
  it('should return true for non-empty strings', () => {
    expect(isNonEmptyString('hello')).toBe(true);
    expect(isNonEmptyString('x')).toBe(true);
  });
  it('should return false for empty strings and non-strings', () => {
    expect(isNonEmptyString('')).toBe(false);
    expect(isNonEmptyString(null)).toBe(false);
    expect(isNonEmptyString(1)).toBe(false);
  });
});

describe('isArray', () => {
  it('should return true for arrays', () => {
    expect(isArray([])).toBe(true);
    expect(isArray([1, 2, 3])).toBe(true);
  });
  it('should return false for non-arrays', () => {
    expect(isArray({})).toBe(false);
    expect(isArray('array')).toBe(false);
    expect(isArray(null)).toBe(false);
  });
});

describe('isNonEmptyArray', () => {
  it('should return true for arrays with elements', () => {
    expect(isNonEmptyArray([1])).toBe(true);
    expect(isNonEmptyArray([1, 2])).toBe(true);
  });
  it('should return false for empty arrays and non-arrays', () => {
    expect(isNonEmptyArray([])).toBe(false);
    expect(isNonEmptyArray(null)).toBe(false);
    expect(isNonEmptyArray('array')).toBe(false);
  });
});

describe('isArrayOf', () => {
  it('should return true when all elements match the guard', () => {
    expect(isArrayOf(isString)(['a', 'b'])).toBe(true);
    expect(isArrayOf(isNumber)([1, 2])).toBe(true);
    expect(isArrayOf(isString)([])).toBe(true);
  });
  it('should return false when any element fails the guard', () => {
    expect(isArrayOf(isString)(['a', 1])).toBe(false);
    expect(isArrayOf(isNumber)(null)).toBe(false);
  });
});

describe('isNonEmptyArrayOf', () => {
  it('should return true for non-empty arrays where all elements match', () => {
    expect(isNonEmptyArrayOf(isString)(['a', 'b'])).toBe(true);
    expect(isNonEmptyArrayOf(isNumber)([1])).toBe(true);
  });
  it('should return false for empty arrays or type mismatches', () => {
    expect(isNonEmptyArrayOf(isString)([])).toBe(false);
    expect(isNonEmptyArrayOf(isString)(['a', 1])).toBe(false);
    expect(isNonEmptyArrayOf(isString)(null)).toBe(false);
  });
});

describe('isObject', () => {
  class Widget {
    readonly id = 1;
  }

  it('should return true for plain objects', () => {
    expect(isObject({})).toBe(true);
    expect(isObject({ a: 1 })).toBe(true);
    expect(isObject(Object.create(null))).toBe(true);
  });
  it('should return false for arrays, class instances, and built-in objects', () => {
    expect(isObject(null)).toBe(false);
    expect(isObject([])).toBe(false);
    expect(isObject('string')).toBe(false);
    expect(isObject(new Date())).toBe(false);
    expect(isObject(new Map())).toBe(false);
    expect(isObject(new Widget())).toBe(false);
  });
});

describe('isFunction', () => {
  it('should return true for functions', () => {
    expect(isFunction(() => void 0)).toBe(true);
    expect(isFunction(function () {})).toBe(true);
  });
  it('should return false for non-functions', () => {
    expect(isFunction({})).toBe(false);
    expect(isFunction('fn')).toBe(false);
  });
});

describe('isDate', () => {
  it('should return true for Date instances', () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate(new Date('2020-01-01'))).toBe(true);
    expect(isDate(new Date('invalid'))).toBe(true);
  });
  it('should return false for non-dates', () => {
    expect(isDate('2020-01-01')).toBe(false);
    expect(isDate(null)).toBe(false);
  });
});

describe('isValidDate', () => {
  it('should return true for valid Date instances', () => {
    expect(isValidDate(new Date())).toBe(true);
    expect(isValidDate(new Date('2020-01-01'))).toBe(true);
  });
  it('should return false for invalid dates and non-dates', () => {
    expect(isValidDate(new Date('invalid'))).toBe(false);
    expect(isValidDate('2020-01-01')).toBe(false);
    expect(isValidDate(null)).toBe(false);
  });
});

describe('isError', () => {
  it('should return true for Error instances', () => {
    expect(isError(new Error('oops'))).toBe(true);
    expect(isError(new TypeError('type'))).toBe(true);
  });
  it('should return false for non-errors', () => {
    expect(isError({ message: 'oops' })).toBe(false);
    expect(isError('error')).toBe(false);
  });
});

describe('isSymbol', () => {
  it('should return true for symbols', () => {
    expect(isSymbol(Symbol('s'))).toBe(true);
  });
  it('should return false for non-symbols', () => {
    expect(isSymbol('symbol')).toBe(false);
    expect(isSymbol(null)).toBe(false);
  });
});

describe('isBigInt', () => {
  it('should return true for bigints', () => {
    expect(isBigInt(BigInt(1))).toBe(true);
    expect(isBigInt(0n)).toBe(true);
  });
  it('should return false for non-bigints', () => {
    expect(isBigInt(1)).toBe(false);
    expect(isBigInt('1n')).toBe(false);
  });
});

describe('isRegExp', () => {
  it('should return true for RegExp instances', () => {
    expect(isRegExp(/abc/)).toBe(true);
    expect(isRegExp(new RegExp('abc'))).toBe(true);
  });
  it('should return false for non-regexp values', () => {
    expect(isRegExp('/abc/')).toBe(false);
    expect(isRegExp(null)).toBe(false);
  });
});

describe('isMap', () => {
  it('should return true for Map instances', () => {
    expect(isMap(new Map())).toBe(true);
    expect(isMap(new Map([['key', 'val']]))).toBe(true);
  });
  it('should return false for non-map values', () => {
    expect(isMap({})).toBe(false);
    expect(isMap(null)).toBe(false);
  });
});

describe('isSet', () => {
  it('should return true for Set instances', () => {
    expect(isSet(new Set())).toBe(true);
    expect(isSet(new Set([1]))).toBe(true);
  });
  it('should return false for non-set values', () => {
    expect(isSet([])).toBe(false);
    expect(isSet(null)).toBe(false);
  });
});

describe('isPromise', () => {
  it('should return true for Promise instances', () => {
    expect(isPromise(Promise.resolve())).toBe(true);
  });
  it('should return false for non-promise values', () => {
    expect(isPromise({ then: () => {} })).toBe(false);
    expect(isPromise(null)).toBe(false);
  });
});

describe('isThenable', () => {
  it('should return true for objects with a callable then', () => {
    expect(isThenable({ then: () => {} })).toBe(true);
    expect(isThenable(Promise.resolve())).toBe(true);
  });
  it('should return true for functions with a then property', () => {
    const fn = Object.assign(() => void 0, { then: () => {} });
    expect(isThenable(fn)).toBe(true);
  });
  it('should return false for non-thenables', () => {
    expect(isThenable(null)).toBe(false);
    expect(isThenable('then')).toBe(false);
    expect(isThenable({ then: 'not-a-function' })).toBe(false);
  });
});

describe('createTypeGuard', () => {
  class Widget {
    constructor(public id: number) {}
  }

  const isWidget = createTypeGuard(Widget);

  it('should return true for instances of the class', () => {
    expect(isWidget(new Widget(1))).toBe(true);
  });
  it('should return false for plain objects and non-instances', () => {
    expect(isWidget({ id: 1 })).toBe(false);
    expect(isWidget(null)).toBe(false);
  });
  it('should name the guard after the constructor', () => {
    expect(isWidget.name).toBe('isWidget');
  });
  it('should allow an explicit guard name override', () => {
    expect(createTypeGuard(Widget, 'CustomWidget').name).toBe('isCustomWidget');
  });
  it('should fall back to a safe default when the constructor name is empty', () => {
    const AnonymousWidget = class {
      readonly id = 1;
    };

    Object.defineProperty(AnonymousWidget, 'name', { value: '' });

    expect(createTypeGuard(AnonymousWidget).name).toBe('isType');
  });
});

describe('createEnumGuard', () => {
  enum Color {
    Red = 'RED',
    Blue = 'BLUE',
  }
  enum Status {
    Active = 1,
    Inactive = 2,
  }
  enum Size {
    Small = 'SMALL',
    Large = 'LARGE',
  }

  const isColor = createEnumGuard(Color, 'Color');
  const isStatus = createEnumGuard(Status, 'Status');
  const isSize = createEnumGuard(Size);

  it('should return true for valid string enum values', () => {
    expect(isColor('RED')).toBe(true);
    expect(isColor('BLUE')).toBe(true);
  });
  it('should return false for enum keys and unknown values', () => {
    expect(isColor('Red')).toBe(false);
    expect(isColor('GREEN')).toBe(false);
  });
  it('should return true for valid numeric enum values', () => {
    expect(isStatus(1)).toBe(true);
    expect(isStatus(2)).toBe(true);
  });
  it('should return false for reverse-mapped keys and unknown numbers', () => {
    expect(isStatus('Active')).toBe(false);
    expect(isStatus(3)).toBe(false);
  });
  it('should return false for non-string and non-number values', () => {
    expect(isSize(null)).toBe(false);
    expect(isSize({ value: 'SMALL' })).toBe(false);
    expect(isSize([])).toBe(false);
  });
  it('should name the guard after the provided enum name', () => {
    expect(isColor.name).toBe('isColor');
  });
  it('should use the default guard name when no enum name is provided', () => {
    expect(isSize.name).toBe('isEnumValue');
    expect(isSize('SMALL')).toBe(true);
  });
});
