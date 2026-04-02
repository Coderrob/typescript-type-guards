import { describe } from 'vitest';

import { isNull } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isNull', () => {
  describeBehavioralContract(
    isNull,
    [contractCase('null', null)],
    [
      contractCase('undefined', undefined),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('an empty string', ''),
      contractCase('a populated string', 'value'),
      contractCase('an empty array', []),
    ],
  );
});
