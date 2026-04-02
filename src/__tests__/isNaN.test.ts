import { describe } from 'vitest';

import { isNaN } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isNaN', () => {
  describeBehavioralContract(
    isNaN,
    [contractCase('the NaN value', NaN)],
    [
      contractCase('a positive integer', 1),
      contractCase('zero', 0),
      contractCase('the string "NaN"', 'NaN'),
      contractCase('an empty string', ''),
      contractCase('the boolean false', false),
      contractCase('null', null),
      contractCase('undefined', undefined),
    ],
  );
});
