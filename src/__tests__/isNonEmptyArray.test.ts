import { describe } from 'vitest';

import { isNonEmptyArray } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isNonEmptyArray', () => {
  describeBehavioralContract(
    isNonEmptyArray,
    [
      contractCase('a single-element array', [1]),
      contractCase('a multi-element array', [1, 2]),
      contractCase('an array containing null', [null]),
    ],
    [
      contractCase('an empty array', []),
      contractCase('null', null),
      contractCase('undefined', undefined),
      contractCase('a populated string', 'array'),
      contractCase('an empty string', ''),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
    ],
  );
});
