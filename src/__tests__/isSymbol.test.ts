import { describe } from 'vitest';

import { isSymbol } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isSymbol', () => {
  describeBehavioralContract(
    isSymbol,
    [
      contractCase('a local symbol', Symbol('s')),
      contractCase('a global symbol', Symbol.for('shared-symbol')),
    ],
    [
      contractCase('a populated string', 'symbol'),
      contractCase('an empty string', ''),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('null', null),
      contractCase('undefined', undefined),
    ],
  );
});
