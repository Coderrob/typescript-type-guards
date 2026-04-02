import { isArray } from '../index';
import {
  ONE,
  THREE,
  TWO,
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('an empty array', []),
  contractCase('an array of numbers', [ONE, TWO, THREE]),
  contractCase('a mixed array', ['a', false, null]),
];

const NEGATIVE_USE_CASES = [
  contractCase('a plain object', {}),
  contractCase('a populated string', 'array'),
  contractCase('an empty string', ''),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
  contractCase('null', null),
  contractCase('undefined', undefined),
];

describeGuardModule(
  'isArray',
  isArray,
  POSITIVE_USE_CASES,
  NEGATIVE_USE_CASES,
);
