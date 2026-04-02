import { describe } from 'vitest';

import { isValidDate } from '../index';
import {
  FIXED_DATE,
  INVALID_DATE,
  OTHER_DATE,
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isValidDate', () => {
  describeBehavioralContract(
    isValidDate,
    [
      contractCase('a fixed valid Date', FIXED_DATE),
      contractCase('a second valid Date', OTHER_DATE),
    ],
    [
      contractCase('an invalid Date object', INVALID_DATE),
      contractCase('a date string', '2020-01-01'),
      contractCase('an empty string', ''),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('a plain object', {}),
      contractCase('null', null),
      contractCase('undefined', undefined),
    ],
  );
});
