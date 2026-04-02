import { isSet } from '../index';
import {
  ONE,
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('an empty Set', new Set()),
  contractCase('a populated Set', new Set([ONE])),
];

const NEGATIVE_USE_CASES = [
  contractCase('an empty array', []),
  contractCase('a plain object', {}),
  contractCase('an empty string', ''),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
  contractCase('null', null),
  contractCase('undefined', undefined),
];

describeGuardModule('isSet', isSet, POSITIVE_USE_CASES, NEGATIVE_USE_CASES);
