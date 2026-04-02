import { describe } from 'vitest';

import { isFunction } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isFunction', () => {
  describeBehavioralContract(
    isFunction,
    [
      contractCase('an arrow function', () => void 0),
      contractCase('a function declaration expression', function () {}),
    ],
    [
      contractCase('a plain object', {}),
      contractCase('an empty array', []),
      contractCase('a populated string', 'fn'),
      contractCase('an empty string', ''),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('null', null),
      contractCase('undefined', undefined),
    ],
  );
});
