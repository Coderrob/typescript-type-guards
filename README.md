# typescript-type-guards

Reusable TypeScript type guards for narrowing `unknown` values in application and library code.

## Installation

```bash
npm install typescript-type-guards
```

## Usage

```ts
import {
  createEnumGuard,
  createTypeGuard,
  isArrayOf,
  isDefined,
  isNonEmptyString,
  isNumber,
  isString,
} from 'typescript-type-guards';

const values: unknown[] = ['a', 'b', 'c'];

if (isArrayOf(isString)(values)) {
  values.map((value) => value.toUpperCase());
}

const maybeName: string | null | undefined = 'Ada';

if (isDefined(maybeName) && isNonEmptyString(maybeName)) {
  console.log(maybeName);
}

enum Status {
  Active = 'ACTIVE',
  Inactive = 'INACTIVE',
}

const isStatus = createEnumGuard(Status, 'Status');

if (isStatus('ACTIVE')) {
  console.log('valid enum value');
}

class User {
  constructor(public readonly id: number) {}
}

const isUser = createTypeGuard(User);
const input: unknown = new User(1);

if (isUser(input) && isNumber(input.id)) {
  console.log(input.id);
}
```

## Included guards

- Primitive guards: `isString`, `isNumber`, `isBoolean`, `isBigInt`, `isSymbol`, `isNull`, `isUndefined`, `isNullish`, `isNullOrUndefined`
- Numeric guards: `isFiniteNumber`, `isInteger`, `isNaN`
- Collection guards: `isArray`, `isNonEmptyArray`, `isArrayOf`, `isNonEmptyArrayOf`, `isMap`, `isSet`
- Object-like guards: `isObject`, `isFunction`, `isError`, `isRegExp`, `isDate`, `isValidDate`, `isPromise`, `isThenable`
- Utility guards: `isDefined`, `isNonEmptyString`, `createTypeGuard`, `createEnumGuard`

## Package output

The published package exposes a single public entrypoint:

```ts
import { isString } from 'typescript-type-guards';
```

Type declarations are emitted to `dist/*.d.ts` during build and are included in the published package.

## Development

```bash
npm test
npm run build
```
