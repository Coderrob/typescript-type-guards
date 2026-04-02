import { isNumber } from '../index';
import {
  NEGATIVE_FIVE_POINT_FIVE,
  ONE,
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('a positive integer', ONE),
  contractCase('zero', ZERO),
  contractCase('a negative decimal', NEGATIVE_FIVE_POINT_FIVE),
  contractCase('positive infinity', Infinity),
  contractCase('negative infinity', -Infinity),
];

const NEGATIVE_USE_CASES = [
  contractCase('NaN', Number.NaN),
  contractCase('a numeric string', '1'),
  contractCase('an empty string', ''),
  contractCase('the boolean false', false),
  contractCase('null', null),
  contractCase('undefined', undefined),
];

describeGuardModule(
  'isNumber',
  isNumber,
  POSITIVE_USE_CASES,
  NEGATIVE_USE_CASES,
);
