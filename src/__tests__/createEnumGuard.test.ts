import { describe, expect, it } from 'vitest';

import { createEnumGuard } from '../index';
import {
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

describe('createEnumGuard', () => {
  enum Color {
    Red = 'RED',
    Blue = 'BLUE',
  }

  enum Status {
    Active = 1,
    Inactive = 2,
  }

  enum Size {
    Small = 'SMALL',
    Large = 'LARGE',
  }

  const isColor = createEnumGuard(Color, 'Color');
  const isStatus = createEnumGuard(Status, 'Status');
  const isSize = createEnumGuard(Size);

  describe('when configured for a string enum', () => {
    describeBehavioralContract(
      isColor,
      [
        contractCase('the RED enum value', 'RED'),
        contractCase('the BLUE enum value', 'BLUE'),
      ],
      [
        contractCase('the enum key "Red"', 'Red'),
        contractCase('an unknown enum string', 'GREEN'),
        contractCase('an empty string', ''),
        contractCase('null', null),
        contractCase('undefined', undefined),
        contractCase('the boolean false', false),
      ],
    );

    it('should name the guard after the provided enum name', () => {
      expect(isColor.name).toBe('isColor');
    });
  });

  describe('when configured for a numeric enum', () => {
    describeBehavioralContract(
      isStatus,
      [
        contractCase('the Active enum value', 1),
        contractCase('the Inactive enum value', 2),
      ],
      [
        contractCase('the reverse-mapped enum key', 'Active'),
        contractCase('a numeric-looking string', '1'),
        contractCase('an unknown numeric enum value', 3),
        contractCase('NaN', Number.NaN),
        contractCase('null', null),
        contractCase('undefined', undefined),
        contractCase('the boolean false', false),
      ],
    );
  });

  describe('when configured without an explicit enum name', () => {
    describeBehavioralContract(
      isSize,
      [
        contractCase('the SMALL enum value', 'SMALL'),
        contractCase('the LARGE enum value', 'LARGE'),
      ],
      [
        contractCase('null', null),
        contractCase('undefined', undefined),
        contractCase('an object containing a matching value property', {
          value: 'SMALL',
        }),
        contractCase('an empty array', []),
        contractCase('the boolean false', false),
      ],
    );

    it('should use the default guard name', () => {
      expect(isSize.name).toBe('isEnumValue');
    });
  });
});
