import { isMap } from '../guards/isMap';
import {
  ZERO,
  contractCase,
  describeGuardModule,
} from './support/test-helpers';

const POSITIVE_USE_CASES = [
  contractCase('an empty Map', new Map()),
  contractCase('a populated Map', new Map([['key', 'val']])),
];

const NEGATIVE_USE_CASES = [
  contractCase('a plain object', {}),
  contractCase('an empty array', []),
  contractCase('an empty string', ''),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
  contractCase('null', null),
  contractCase('undefined', undefined),
];

describeGuardModule('isMap', isMap, POSITIVE_USE_CASES, NEGATIVE_USE_CASES);
