import { describe } from 'vitest';

import { isError } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isError', () => {
  describeBehavioralContract(
    isError,
    [
      contractCase('an Error instance', new Error('oops')),
      contractCase('a TypeError instance', new TypeError('type')),
    ],
    [
      contractCase('a plain object with a message field', { message: 'oops' }),
      contractCase('a populated string', 'error'),
      contractCase('an empty string', ''),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('null', null),
      contractCase('undefined', undefined),
    ],
  );
});
