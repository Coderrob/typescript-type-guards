import { describe, expect, it } from 'vitest';

import { createEnumGuard } from '../index';
import {
  ONE,
  THREE,
  TWO,
  contractCase,
  describeBehavioralContract,
} from './support/test-helpers';

enum Color {
  Red = 'RED',
  Blue = 'BLUE',
}

enum Status {
  Active = ONE,
  Inactive = TWO,
}

enum Size {
  Small = 'SMALL',
  Large = 'LARGE',
}

const isColor = createEnumGuard(Color, 'Color');
const isStatus = createEnumGuard(Status, 'Status');
const isSize = createEnumGuard(Size);

const COLOR_POSITIVE_USE_CASES = [
  contractCase('the RED enum value', 'RED'),
  contractCase('the BLUE enum value', 'BLUE'),
];

const COLOR_NEGATIVE_USE_CASES = [
  contractCase('the enum key "Red"', 'Red'),
  contractCase('an unknown enum string', 'GREEN'),
  contractCase('an empty string', ''),
  contractCase('null', null),
  contractCase('undefined', undefined),
  contractCase('the boolean false', false),
];

const STATUS_POSITIVE_USE_CASES = [
  contractCase('the Active enum value', ONE),
  contractCase('the Inactive enum value', TWO),
];

const STATUS_NEGATIVE_USE_CASES = [
  contractCase('the reverse-mapped enum key', 'Active'),
  contractCase('a numeric-looking string', '1'),
  contractCase('an unknown numeric enum value', THREE),
  contractCase('NaN', Number.NaN),
  contractCase('null', null),
  contractCase('undefined', undefined),
  contractCase('the boolean false', false),
];

const SIZE_POSITIVE_USE_CASES = [
  contractCase('the SMALL enum value', 'SMALL'),
  contractCase('the LARGE enum value', 'LARGE'),
];

const SIZE_NEGATIVE_USE_CASES = [
  contractCase('null', null),
  contractCase('undefined', undefined),
  contractCase('an object containing a matching value property', {
    value: 'SMALL',
  }),
  contractCase('an empty array', []),
  contractCase('the boolean false', false),
];

describe('createEnumGuard', () => {
  describe('when configured for a string enum', () => {
    describeBehavioralContract(
      isColor,
      COLOR_POSITIVE_USE_CASES,
      COLOR_NEGATIVE_USE_CASES,
    );

    it('should name the guard after the provided enum name', () => {
      expect(isColor.name).toBe('isColor');
    });
  });

  describe('when configured for a numeric enum', () => {
    describeBehavioralContract(
      isStatus,
      STATUS_POSITIVE_USE_CASES,
      STATUS_NEGATIVE_USE_CASES,
    );
  });

  describe('when configured without an explicit enum name', () => {
    describeBehavioralContract(
      isSize,
      SIZE_POSITIVE_USE_CASES,
      SIZE_NEGATIVE_USE_CASES,
    );

    it('should use the default guard name', () => {
      expect(isSize.name).toBe('isEnumValue');
    });
  });
});
