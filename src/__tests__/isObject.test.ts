import { isObject } from '../index';
import {
  FIXED_DATE,
  NULL_PROTOTYPE_OBJECT,
  ONE,
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

class Widget {
  readonly id = ONE;
}

const POSITIVE_USE_CASES = [
  contractCase('an empty plain object', {}),
  contractCase('a populated plain object', { a: ONE }),
  contractCase('a null-prototype object', NULL_PROTOTYPE_OBJECT),
];

const NEGATIVE_USE_CASES = [
  contractCase('null', null),
  contractCase('undefined', undefined),
  contractCase('an empty array', []),
  contractCase('a populated string', 'string'),
  contractCase('an empty string', ''),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
  contractCase('a Date instance', FIXED_DATE),
  contractCase('a Map instance', new Map()),
  contractCase('a class instance', new Widget()),
];

describeGuardModule(
  'isObject',
  isObject,
  POSITIVE_USE_CASES,
  NEGATIVE_USE_CASES,
);
