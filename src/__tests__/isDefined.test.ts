import { describe } from 'vitest';

import { isDefined } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isDefined', () => {
  describeBehavioralContract(
    isDefined,
    [
      contractCase('the number zero', 0),
      contractCase('an empty string', ''),
      contractCase('the boolean false', false),
      contractCase('a populated string', 'value'),
      contractCase('an empty array', []),
      contractCase('a plain object', {}),
    ],
    [contractCase('null', null), contractCase('undefined', undefined)],
  );
});
