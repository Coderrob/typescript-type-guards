import { describe, expect, it } from 'vitest';

import { createTypeGuard } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('createTypeGuard', () => {
  class Widget {
    constructor(public id: number) {}
  }

  const isWidget = createTypeGuard(Widget);

  describeBehavioralContract(
    isWidget,
    [
      contractCase('a Widget instance with a positive id', new Widget(1)),
      contractCase('a Widget instance with zero id', new Widget(0)),
    ],
    [
      contractCase('a plain object with a matching shape', { id: 1 }),
      contractCase('null', null),
      contractCase('undefined', undefined),
      contractCase('an empty string', ''),
      contractCase('the number zero', 0),
      contractCase('the boolean false', false),
      contractCase('an empty array', []),
    ],
  );

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
