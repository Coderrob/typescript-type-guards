import { isNonEmptyArray } from '../index';
import {
  ONE,
  TWO,
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('a single-element array', [ONE]),
  contractCase('a multi-element array', [ONE, TWO]),
  contractCase('an array containing null', [null]),
];

const NEGATIVE_USE_CASES = [
  contractCase('an empty array', []),
  contractCase('null', null),
  contractCase('undefined', undefined),
  contractCase('a populated string', 'array'),
  contractCase('an empty string', ''),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
];

describeGuardModule(
  'isNonEmptyArray',
  isNonEmptyArray,
  POSITIVE_USE_CASES,
  NEGATIVE_USE_CASES,
);
