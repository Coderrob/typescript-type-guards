import { isPromise } from '../index';
import {
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('a resolved Promise', Promise.resolve()),
  contractCase(
    'a handled rejected Promise',
    Promise.reject(new Error('expected rejection')).catch(() => void 0),
  ),
];

const NEGATIVE_USE_CASES = [
  contractCase('a thenable object', { then: () => {} }),
  contractCase('an empty string', ''),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
  contractCase('null', null),
  contractCase('undefined', undefined),
];

describeGuardModule(
  'isPromise',
  isPromise,
  POSITIVE_USE_CASES,
  NEGATIVE_USE_CASES,
);
