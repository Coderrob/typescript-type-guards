import { describe } from 'vitest';

import { isUndefined } from '../guards/isUndefined';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isUndefined', () => {
  describeBehavioralContract(
    isUndefined,
    [contractCase('undefined', undefined)],
    [
      contractCase('null', null),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('an empty string', ''),
      contractCase('a populated string', 'value'),
      contractCase('an empty array', []),
    ],
  );
});
