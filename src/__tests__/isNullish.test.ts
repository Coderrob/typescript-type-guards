import { describe } from 'vitest';

import { isNullish } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isNullish', () => {
  describeBehavioralContract(
    isNullish,
    [contractCase('null', null), contractCase('undefined', undefined)],
    [
      contractCase('the number zero', 0),
      contractCase('an empty string', ''),
      contractCase('the boolean false', false),
      contractCase('a populated string', 'value'),
      contractCase('an empty array', []),
      contractCase('a plain object', {}),
    ],
  );
});
