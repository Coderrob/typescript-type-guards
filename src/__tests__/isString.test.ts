import { isString } from '../index';
import {
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('an empty string literal', ''),
  contractCase('an alphabetic string', 'hello'),
  contractCase('a numeric-looking string', '0'),
];

const NEGATIVE_USE_CASES = [
  contractCase('null', null),
  contractCase('undefined', undefined),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
  contractCase('an empty array', []),
  contractCase('a plain object', {}),
];

describeGuardModule(
  'isString',
  isString,
  POSITIVE_USE_CASES,
  NEGATIVE_USE_CASES,
);
