import { isError } from '../index';
import {
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('an Error instance', new Error('oops')),
  contractCase('a TypeError instance', new TypeError('type')),
];

const NEGATIVE_USE_CASES = [
  contractCase('a plain object with a message field', { message: 'oops' }),
  contractCase('a populated string', 'error'),
  contractCase('an empty string', ''),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
  contractCase('null', null),
  contractCase('undefined', undefined),
];

describeGuardModule(
  'isError',
  isError,
  POSITIVE_USE_CASES,
  NEGATIVE_USE_CASES,
);
