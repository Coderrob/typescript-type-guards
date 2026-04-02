import { describe } from 'vitest';

import { isNonEmptyArrayOf, isNumber, isString } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isNonEmptyArrayOf', () => {
  describe('when configured with isString', () => {
    describeBehavioralContract(
      isNonEmptyArrayOf(isString),
      [
        contractCase('a non-empty array of populated strings', ['a', 'b']),
        contractCase('a non-empty array containing an empty string', ['']),
      ],
      [
        contractCase('an empty array', []),
        contractCase('an array containing a non-string item', ['a', 1]),
        contractCase('null', null),
        contractCase('undefined', undefined),
        contractCase('an empty string', ''),
        contractCase('the boolean false', false),
      ],
    );
  });

  describe('when configured with isNumber', () => {
    describeBehavioralContract(
      isNonEmptyArrayOf(isNumber),
      [
        contractCase('a single-number array', [1]),
        contractCase('a non-empty array of finite numbers', [0, -5.5]),
      ],
      [
        contractCase('an array containing NaN', [1, NaN]),
        contractCase('a plain object', {}),
        contractCase('a populated string', 'array'),
      ],
    );
  });
});
