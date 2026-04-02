import { isFunction } from '../index';
import {
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('an arrow function', () => void 0),
  contractCase('a function declaration expression', function () {}),
];

const NEGATIVE_USE_CASES = [
  contractCase('a plain object', {}),
  contractCase('an empty array', []),
  contractCase('a populated string', 'fn'),
  contractCase('an empty string', ''),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
  contractCase('null', null),
  contractCase('undefined', undefined),
];

describeGuardModule(
  'isFunction',
  isFunction,
  POSITIVE_USE_CASES,
  NEGATIVE_USE_CASES,
);
