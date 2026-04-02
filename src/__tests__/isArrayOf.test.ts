import { describe } from 'vitest';

import { isArrayOf, isNumber, isString } from '../index';
import {
  NEGATIVE_FIVE_POINT_FIVE,
  ONE,
  TWO,
  ZERO,
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

const STRING_POSITIVE_USE_CASES = [
  contractCase('an array of populated strings', ['a', 'b']),
  contractCase('an array containing an empty string', ['']),
  contractCase('an empty array', []),
];

const STRING_NEGATIVE_USE_CASES = [
  contractCase('an array containing a non-string item', ['a', ONE]),
  contractCase('null', null),
  contractCase('undefined', undefined),
  contractCase('an empty string', ''),
  contractCase('the boolean false', false),
];

const NUMBER_POSITIVE_USE_CASES = [
  contractCase('an array of positive integers', [ONE, TWO]),
  contractCase('an array of finite numbers', [ZERO, NEGATIVE_FIVE_POINT_FIVE]),
];

const NUMBER_NEGATIVE_USE_CASES = [
  contractCase('an array containing NaN', [ONE, Number.NaN]),
  contractCase('a plain object', {}),
  contractCase('a populated string', 'array'),
];

describe('isArrayOf', () => {
  describe('when configured with isString', () => {
    describeBehavioralContract(
      isArrayOf(isString),
      STRING_POSITIVE_USE_CASES,
      STRING_NEGATIVE_USE_CASES,
    );
  });

  describe('when configured with isNumber', () => {
    describeBehavioralContract(
      isArrayOf(isNumber),
      NUMBER_POSITIVE_USE_CASES,
      NUMBER_NEGATIVE_USE_CASES,
    );
  });
});
