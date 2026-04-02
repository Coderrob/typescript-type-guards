import { describe } from 'vitest';

import { isPromise } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('isPromise', () => {
  describeBehavioralContract(
    isPromise,
    [
      contractCase('a resolved Promise', Promise.resolve()),
      contractCase(
        'a handled rejected Promise',
        Promise.reject(new Error('expected rejection')).catch(() => void 0),
      ),
    ],
    [
      contractCase('a thenable object', { then: () => {} }),
      contractCase('an empty string', ''),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('null', null),
      contractCase('undefined', undefined),
    ],
  );
});
