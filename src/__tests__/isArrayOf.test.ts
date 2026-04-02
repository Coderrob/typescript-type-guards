import { describe } from 'vitest';

import { isArrayOf, isNumber, isString } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isArrayOf', () => {
  describe('when configured with isString', () => {
    describeBehavioralContract(
      isArrayOf(isString),
      [
        contractCase('an array of populated strings', ['a', 'b']),
        contractCase('an array containing an empty string', ['']),
        contractCase('an empty array', []),
      ],
      [
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
      isArrayOf(isNumber),
      [
        contractCase('an array of positive integers', [1, 2]),
        contractCase('an array of finite numbers', [0, -5.5]),
      ],
      [
        contractCase('an array containing NaN', [1, NaN]),
        contractCase('a plain object', {}),
        contractCase('a populated string', 'array'),
      ],
    );
  });
});
