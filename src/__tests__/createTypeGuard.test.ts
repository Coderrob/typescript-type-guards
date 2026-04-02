import { describe, expect, it } from 'vitest';

import { createTypeGuard } from '../index';
import {
  ONE,
  ZERO,
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

class Widget {
  constructor(public id: number) {}
}

const isWidget = createTypeGuard(Widget);

const POSITIVE_USE_CASES = [
  contractCase('a Widget instance with a positive id', new Widget(ONE)),
  contractCase('a Widget instance with zero id', new Widget(ZERO)),
];

const NEGATIVE_USE_CASES = [
  contractCase('a plain object with a matching shape', { id: ONE }),
  contractCase('null', null),
  contractCase('undefined', undefined),
  contractCase('an empty string', ''),
  contractCase('the number zero', ZERO),
  contractCase('the boolean false', false),
  contractCase('an empty array', []),
];

describe('createTypeGuard', () => {
  describeBehavioralContract(isWidget, POSITIVE_USE_CASES, NEGATIVE_USE_CASES);

  it('should name the guard after the constructor', () => {
    expect(isWidget.name).toBe('isWidget');
  });

  it('should allow an explicit guard name override', () => {
    expect(createTypeGuard(Widget, 'CustomWidget').name).toBe('isCustomWidget');
  });

  it('should fall back to a safe default when the constructor name is empty', () => {
    const AnonymousWidget = class {
      readonly id = 1;
    };

    Object.defineProperty(AnonymousWidget, 'name', { value: '' });
    expect(createTypeGuard(AnonymousWidget).name).toBe('isType');
  });
});
