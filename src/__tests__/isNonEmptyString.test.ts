import { isNonEmptyString } from '../index';
import {
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('an alphabetic string', 'hello'),
  contractCase('a one-character string', 'x'),
  contractCase('a numeric-looking string', '0'),
];

const NEGATIVE_USE_CASES = [
  contractCase('an empty string', ''),
  contractCase('null', null),
  contractCase('undefined', undefined),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
  contractCase('an empty array', []),
];

describeGuardModule(
  'isNonEmptyString',
  isNonEmptyString,
  POSITIVE_USE_CASES,
  NEGATIVE_USE_CASES,
);
