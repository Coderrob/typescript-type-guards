import { isRegExp } from '../index';
import {
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('a regex literal', /abc/),
  contractCase('a RegExp instance', new RegExp('abc')),
];

const NEGATIVE_USE_CASES = [
  contractCase('a regex-like string', '/abc/'),
  contractCase('an empty string', ''),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
  contractCase('null', null),
  contractCase('undefined', undefined),
];

describeGuardModule(
  'isRegExp',
  isRegExp,
  POSITIVE_USE_CASES,
  NEGATIVE_USE_CASES,
);
