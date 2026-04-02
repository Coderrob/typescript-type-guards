import { describe } from 'vitest';

import { isArray } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isArray', () => {
  describeBehavioralContract(
    isArray,
    [
      contractCase('an empty array', []),
      contractCase('an array of numbers', [1, 2, 3]),
      contractCase('a mixed array', ['a', false, null]),
    ],
    [
      contractCase('a plain object', {}),
      contractCase('a populated string', 'array'),
      contractCase('an empty string', ''),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('null', null),
      contractCase('undefined', undefined),
    ],
  );
});
