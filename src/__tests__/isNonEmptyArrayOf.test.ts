import { describe } from 'vitest';

import { isNonEmptyArrayOf, isNumber, isString } from '../index';
import {
  NEGATIVE_FIVE_POINT_FIVE,
  ONE,
  ZERO,
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

const STRING_POSITIVE_USE_CASES = [
  contractCase('a non-empty array of populated strings', ['a', 'b']),
  contractCase('a non-empty array containing an empty string', ['']),
];

const STRING_NEGATIVE_USE_CASES = [
  contractCase('an empty array', []),
  contractCase('an array containing a non-string item', ['a', ONE]),
  contractCase('null', null),
  contractCase('undefined', undefined),
  contractCase('an empty string', ''),
  contractCase('the boolean false', false),
];

const NUMBER_POSITIVE_USE_CASES = [
  contractCase('a single-number array', [ONE]),
  contractCase(
    'a non-empty array of finite numbers',
    [ZERO, NEGATIVE_FIVE_POINT_FIVE],
  ),
];

const NUMBER_NEGATIVE_USE_CASES = [
  contractCase('an array containing NaN', [ONE, Number.NaN]),
  contractCase('a plain object', {}),
  contractCase('a populated string', 'array'),
];

describe('isNonEmptyArrayOf', () => {
  describe('when configured with isString', () => {
    describeBehavioralContract(
      isNonEmptyArrayOf(isString),
      STRING_POSITIVE_USE_CASES,
      STRING_NEGATIVE_USE_CASES,
    );
  });

  describe('when configured with isNumber', () => {
    describeBehavioralContract(
      isNonEmptyArrayOf(isNumber),
      NUMBER_POSITIVE_USE_CASES,
      NUMBER_NEGATIVE_USE_CASES,
    );
  });
});
