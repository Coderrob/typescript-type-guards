import { describe } from 'vitest';

import { isNumber } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isNumber', () => {
  describeBehavioralContract(
    isNumber,
    [
      contractCase('a positive integer', 1),
      contractCase('zero', 0),
      contractCase('a negative decimal', -5.5),
      contractCase('positive infinity', Infinity),
      contractCase('negative infinity', -Infinity),
    ],
    [
      contractCase('NaN', NaN),
      contractCase('a numeric string', '1'),
      contractCase('an empty string', ''),
      contractCase('the boolean false', false),
      contractCase('null', null),
      contractCase('undefined', undefined),
    ],
  );
});
