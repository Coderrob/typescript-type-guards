import { describe } from 'vitest';

import { isBoolean } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isBoolean', () => {
  describeBehavioralContract(
    isBoolean,
    [
      contractCase('the boolean true', true),
      contractCase('the boolean false', false),
    ],
    [
      contractCase('the number one', 1),
      contractCase('the number zero', 0),
      contractCase('the string "true"', 'true'),
      contractCase('an empty string', ''),
      contractCase('null', null),
      contractCase('undefined', undefined),
    ],
  );
});
