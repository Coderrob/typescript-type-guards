import { isInteger } from '../index';
import {
  NEGATIVE_FIVE_POINT_FIVE,
  NEGATIVE_TEN,
  ONE,
  POSITIVE_ONE_POINT_FIVE,
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('a positive integer', ONE),
  contractCase('zero', ZERO),
  contractCase('a negative integer', NEGATIVE_TEN),
];

const NEGATIVE_USE_CASES = [
  contractCase('a positive decimal', POSITIVE_ONE_POINT_FIVE),
  contractCase('a negative decimal', NEGATIVE_FIVE_POINT_FIVE),
  contractCase('positive infinity', Infinity),
  contractCase('a numeric string', '1'),
  contractCase('the boolean false', false),
  contractCase('null', null),
  contractCase('undefined', undefined),
];

describeGuardModule(
  'isInteger',
  isInteger,
  POSITIVE_USE_CASES,
  NEGATIVE_USE_CASES,
);
