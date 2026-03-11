import { createTypeGuard, createEnumGuard } from '../src/generic';

// ---- Test classes -----------------------------------------------------------

class Animal {
  constructor(public name: string) {}
}

class Dog extends Animal {
  bark(): string {
    return 'Woof';
  }
}

class User {
  constructor(
    public id: number,
    public name: string,
  ) {}
}

// ---- Test enums -------------------------------------------------------------

enum Direction {
  Up = 'UP',
  Down = 'DOWN',
  Left = 'LEFT',
  Right = 'RIGHT',
}

enum Status {
  Active = 1,
  Inactive = 2,
  Pending = 3,
}

// Heterogeneous enum (mix of string and number values)
enum Mixed {
  Yes = 'YES',
  No = 0,
}

// ---- createTypeGuard --------------------------------------------------------

describe('createTypeGuard', () => {
  describe('for a simple class', () => {
    const isUser = createTypeGuard(User);

    it('returns true for an instance of User', () =>
      expect(isUser(new User(1, 'Alice'))).toBe(true));
    it('returns false for a plain object', () =>
      expect(isUser({ id: 1, name: 'Alice' })).toBe(false));
    it('returns false for null', () => expect(isUser(null)).toBe(false));
    it('returns false for undefined', () => expect(isUser(undefined)).toBe(false));
    it('returns false for a string', () => expect(isUser('user')).toBe(false));
    it('returns false for a number', () => expect(isUser(42)).toBe(false));
  });

  describe('for an inheritance hierarchy', () => {
    const isAnimal = createTypeGuard(Animal);
    const isDog = createTypeGuard(Dog);

    it('returns true for an Animal instance', () =>
      expect(isAnimal(new Animal('Cat'))).toBe(true));
    it('returns true for a Dog instance (Dog extends Animal)', () =>
      expect(isAnimal(new Dog('Rex'))).toBe(true));
    it('returns true for a Dog instance', () => expect(isDog(new Dog('Rex'))).toBe(true));
    it('returns false for an Animal when checking Dog', () =>
      expect(isDog(new Animal('Cat'))).toBe(false));
  });

  describe('runtime function name', () => {
    it('names the guard function is<ClassName>', () => {
      const isUser = createTypeGuard(User);
      expect(isUser.name).toBe('isUser');
    });

    it('names the guard function isAnimal for Animal', () => {
      const isAnimal = createTypeGuard(Animal);
      expect(isAnimal.name).toBe('isAnimal');
    });
  });
});

// ---- createEnumGuard --------------------------------------------------------

describe('createEnumGuard', () => {
  describe('for a string enum (Direction)', () => {
    const isDirection = createEnumGuard(Direction, 'Direction');

    it('returns true for a valid Direction value (UP)', () =>
      expect(isDirection('UP')).toBe(true));
    it('returns true for a valid Direction value (DOWN)', () =>
      expect(isDirection('DOWN')).toBe(true));
    it('returns true for a valid Direction value (LEFT)', () =>
      expect(isDirection('LEFT')).toBe(true));
    it('returns true for a valid Direction value (RIGHT)', () =>
      expect(isDirection('RIGHT')).toBe(true));
    it('returns false for an invalid string', () =>
      expect(isDirection('DIAGONAL')).toBe(false));
    it('returns false for a key name (not a value)', () =>
      expect(isDirection('Up')).toBe(false));
    it('returns false for null', () => expect(isDirection(null)).toBe(false));
    it('returns false for undefined', () => expect(isDirection(undefined)).toBe(false));
    it('returns false for a number', () => expect(isDirection(1)).toBe(false));
  });

  describe('for a numeric enum (Status)', () => {
    const isStatus = createEnumGuard(Status, 'Status');

    it('returns true for Active (1)', () => expect(isStatus(1)).toBe(true));
    it('returns true for Inactive (2)', () => expect(isStatus(2)).toBe(true));
    it('returns true for Pending (3)', () => expect(isStatus(3)).toBe(true));
    it('returns false for an invalid number', () => expect(isStatus(99)).toBe(false));
    it('returns false for the key name', () => expect(isStatus('Active')).toBe(false));
    it('returns false for zero', () => expect(isStatus(0)).toBe(false));
    it('returns false for null', () => expect(isStatus(null)).toBe(false));
  });

  describe('for a heterogeneous enum (Mixed)', () => {
    const isMixed = createEnumGuard(Mixed, 'Mixed');

    it('returns true for YES', () => expect(isMixed('YES')).toBe(true));
    it('returns true for 0', () => expect(isMixed(0)).toBe(true));
    it('returns false for an invalid string', () => expect(isMixed('NO')).toBe(false));
    it('returns false for 1', () => expect(isMixed(1)).toBe(false));
    it('returns false for null', () => expect(isMixed(null)).toBe(false));
  });

  describe('runtime function name', () => {
    it('uses is<enumName> when enumName is provided', () => {
      const isDirection = createEnumGuard(Direction, 'Direction');
      expect(isDirection.name).toBe('isDirection');
    });

    it('defaults to isEnumValue when no name is provided', () => {
      const guard = createEnumGuard(Direction);
      expect(guard.name).toBe('isEnumValue');
    });
  });
});
