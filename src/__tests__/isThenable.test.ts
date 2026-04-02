import { describe, expect, it } from 'vitest';

import { isThenable } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isThenable', () => {
  describeBehavioralContract(
    isThenable,
    [
      contractCase('an object with a callable then property', {
        then: () => {},
      }),
      contractCase('a Promise instance', Promise.resolve()),
    ],
    [
      contractCase('null', null),
      contractCase('undefined', undefined),
      contractCase('a populated string', 'then'),
      contractCase('an empty string', ''),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('an object with a non-callable then property', {
        then: 'not-a-function',
      }),
      contractCase('an empty object', {}),
    ],
  );

  it('should accept functions with a callable then property', () => {
    const fn = Object.assign(() => void 0, { then: () => {} });
    expect(isThenable(fn)).toBe(true);
  });
});
