import { isSymbol } from '../index';
import {
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('a local symbol', Symbol('s')),
  contractCase('a global symbol', Symbol.for('shared-symbol')),
];

const NEGATIVE_USE_CASES = [
  contractCase('a populated string', 'symbol'),
  contractCase('an empty string', ''),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
  contractCase('null', null),
  contractCase('undefined', undefined),
];

describeGuardModule(
  'isSymbol',
  isSymbol,
  POSITIVE_USE_CASES,
  NEGATIVE_USE_CASES,
);
