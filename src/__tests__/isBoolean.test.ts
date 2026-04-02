import { isBoolean } from '../index';
import {
  ONE,
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('the boolean true', true),
  contractCase('the boolean false', false),
];

const NEGATIVE_USE_CASES = [
  contractCase('the number one', ONE),
  contractCase('the number zero', ZERO),
  contractCase('the string "true"', 'true'),
  contractCase('an empty string', ''),
  contractCase('null', null),
  contractCase('undefined', undefined),
];

describeGuardModule(
  'isBoolean',
  isBoolean,
  POSITIVE_USE_CASES,
  NEGATIVE_USE_CASES,
);
