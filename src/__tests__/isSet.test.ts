import { describe } from 'vitest';

import { isSet } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isSet', () => {
  describeBehavioralContract(
    isSet,
    [
      contractCase('an empty Set', new Set()),
      contractCase('a populated Set', new Set([1])),
    ],
    [
      contractCase('an empty array', []),
      contractCase('a plain object', {}),
      contractCase('an empty string', ''),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('null', null),
      contractCase('undefined', undefined),
    ],
  );
});
