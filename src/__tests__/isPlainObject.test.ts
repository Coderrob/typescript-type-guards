import { describe } from 'vitest';

import { isPlainObject } from '../index';
import {
  FIXED_DATE,
  NULL_PROTOTYPE_OBJECT,
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isPlainObject', () => {
  class Widget {
    readonly id = 1;
  }

  describeBehavioralContract(
    isPlainObject,
    [
      contractCase('an empty plain object', {}),
      contractCase('a populated plain object', { a: 1 }),
      contractCase('a null-prototype object', NULL_PROTOTYPE_OBJECT),
    ],
    [
      contractCase('null', null),
      contractCase('undefined', undefined),
      contractCase('an empty array', []),
      contractCase('a populated string', 'string'),
      contractCase('an empty string', ''),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('a Date instance', FIXED_DATE),
      contractCase('a Map instance', new Map()),
      contractCase('a class instance', new Widget()),
    ],
  );
});
