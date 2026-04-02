import { describe, expect, it } from 'vitest';

import { isThenable } from '../index';
import {
  ZERO,
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('an object with a callable then property', {
    then: () => {},
  }),
  contractCase('a Promise instance', Promise.resolve()),
];

const NEGATIVE_USE_CASES = [
  contractCase('null', null),
  contractCase('undefined', undefined),
  contractCase('a populated string', 'then'),
  contractCase('an empty string', ''),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
  contractCase('an object with a non-callable then property', {
    then: 'not-a-function',
  }),
  contractCase('an empty object', {}),
];

describe('isThenable', () => {
  describeBehavioralContract(
    isThenable,
    POSITIVE_USE_CASES,
    NEGATIVE_USE_CASES,
  );

  it('should accept functions with a callable then property', () => {
    const fn = Object.assign(() => void 0, { then: () => {} });
    expect(isThenable(fn)).toBe(true);
  });
});
