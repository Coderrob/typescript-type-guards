import { isBigInt } from '../index';
import {
  ONE,
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('a positive bigint', BigInt(ONE)),
  contractCase('the bigint zero', BigInt(ZERO)),
  contractCase('a negative bigint', -BigInt(ONE)),
];

const NEGATIVE_USE_CASES = [
  contractCase('the number one', ONE),
  contractCase('a bigint-looking string', '1n'),
  contractCase('an empty string', ''),
  contractCase('the boolean false', false),
  contractCase('null', null),
  contractCase('undefined', undefined),
];

describeGuardModule(
  'isBigInt',
  isBigInt,
  POSITIVE_USE_CASES,
  NEGATIVE_USE_CASES,
);
