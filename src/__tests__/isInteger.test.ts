import { describe } from 'vitest';

import { isInteger } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isInteger', () => {
  describeBehavioralContract(
    isInteger,
    [
      contractCase('a positive integer', 1),
      contractCase('zero', 0),
      contractCase('a negative integer', -10),
    ],
    [
      contractCase('a positive decimal', 1.5),
      contractCase('a negative decimal', -5.5),
      contractCase('positive infinity', Infinity),
      contractCase('a numeric string', '1'),
      contractCase('the boolean false', false),
      contractCase('null', null),
      contractCase('undefined', undefined),
    ],
  );
});
