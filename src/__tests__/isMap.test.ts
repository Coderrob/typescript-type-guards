import { describe } from 'vitest';

import { isMap } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isMap', () => {
  describeBehavioralContract(
    isMap,
    [
      contractCase('an empty Map', new Map()),
      contractCase('a populated Map', new Map([['key', 'val']])),
    ],
    [
      contractCase('a plain object', {}),
      contractCase('an empty array', []),
      contractCase('an empty string', ''),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('null', null),
      contractCase('undefined', undefined),
    ],
  );
});
