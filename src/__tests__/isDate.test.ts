import { isDate } from '../index';
import {
  FIXED_DATE,
  INVALID_DATE,
  OTHER_DATE,
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('a fixed valid Date', FIXED_DATE),
  contractCase('a second valid Date', OTHER_DATE),
  contractCase('an invalid Date object', INVALID_DATE),
];

const NEGATIVE_USE_CASES = [
  contractCase('a date string', '2020-01-01'),
  contractCase('an empty string', ''),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
  contractCase('a plain object', {}),
  contractCase('null', null),
  contractCase('undefined', undefined),
];

describeGuardModule('isDate', isDate, POSITIVE_USE_CASES, NEGATIVE_USE_CASES);
