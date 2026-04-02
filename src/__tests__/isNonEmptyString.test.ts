import { describe } from 'vitest';

import { isNonEmptyString } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isNonEmptyString', () => {
  describeBehavioralContract(
    isNonEmptyString,
    [
      contractCase('an alphabetic string', 'hello'),
      contractCase('a one-character string', 'x'),
      contractCase('a numeric-looking string', '0'),
    ],
    [
      contractCase('an empty string', ''),
      contractCase('null', null),
      contractCase('undefined', undefined),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('an empty array', []),
    ],
  );
});
