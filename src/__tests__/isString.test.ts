import { describe } from 'vitest';

import { isString } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isString', () => {
  describeBehavioralContract(
    isString,
    [
      contractCase('an empty string literal', ''),
      contractCase('an alphabetic string', 'hello'),
      contractCase('a numeric-looking string', '0'),
    ],
    [
      contractCase('null', null),
      contractCase('undefined', undefined),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('an empty array', []),
      contractCase('a plain object', {}),
    ],
  );
});
