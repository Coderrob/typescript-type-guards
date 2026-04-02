import { describe } from 'vitest';

import { isBigInt } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isBigInt', () => {
  describeBehavioralContract(
    isBigInt,
    [
      contractCase('a positive bigint', BigInt(1)),
      contractCase('the bigint zero', 0n),
      contractCase('a negative bigint', -1n),
    ],
    [
      contractCase('the number one', 1),
      contractCase('a bigint-looking string', '1n'),
      contractCase('an empty string', ''),
      contractCase('the boolean false', false),
      contractCase('null', null),
      contractCase('undefined', undefined),
    ],
  );
});
