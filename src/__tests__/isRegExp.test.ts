import { describe } from 'vitest';

import { isRegExp } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isRegExp', () => {
  describeBehavioralContract(
    isRegExp,
    [
      contractCase('a regex literal', /abc/),
      contractCase('a RegExp instance', new RegExp('abc')),
    ],
    [
      contractCase('a regex-like string', '/abc/'),
      contractCase('an empty string', ''),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('null', null),
      contractCase('undefined', undefined),
    ],
  );
});
