# @coderrob/typescript-type-guards

<p align="center">
  <img src="public/img/typescript-type-guard-logo.png" alt="typescript-type-guards logo" />
</p>

Reusable TypeScript type guards for narrowing `unknown` values in application and library code.

## Installation

```bash
npm install @coderrob/typescript-type-guards
```

The package and its development tooling require Node.js `^20.19.0`, `^22.13.0`, or `>=24.0.0`.

## Usage

```ts
import {
  createEnumGuard,
  createTypeGuard,
  isArrayOf,
  isDefined,
  isNonEmptyString,
  isNumber,
  isPlainObject,
  isString,
} from '@coderrob/typescript-type-guards';

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

const maybeConfig: unknown = { retries: 3 };

if (isPlainObject(maybeConfig)) {
  console.log(maybeConfig.retries);
}
```

## Included guards

- Primitive guards: `isString`, `isNumber`, `isBoolean`, `isBigInt`, `isSymbol`, `isNull`, `isUndefined`, `isNullish`, `isNullOrUndefined`
- Numeric guards: `isFiniteNumber`, `isInteger`, `isNaN`
- Collection guards: `isArray`, `isNonEmptyArray`, `isArrayOf`, `isNonEmptyArrayOf`, `isMap`, `isSet`
- Object-like guards: `isObject`, `isPlainObject`, `isFunction`, `isError`, `isRegExp`, `isDate`, `isValidDate`, `isPromise`, `isThenable`
- Utility guards: `isDefined`, `isNonEmptyString`, `createTypeGuard`, `createEnumGuard`

## Package output

The published package exposes a single public entrypoint with both ESM and CommonJS support:

```ts
import { isString } from '@coderrob/typescript-type-guards';
```

```js
const { isString } = require('@coderrob/typescript-type-guards');
```

Type declarations are emitted during build and included in the published package.

## Benchmarks

Run the local micro-benchmarks with:

```bash
npm run bench
```

Latest local run on Windows 11 (`10.0.26200.0`) with Node.js `v22.19.0`:

| Guard                                  | Average latency | Average throughput |
| -------------------------------------- | --------------: | -----------------: |
| `isString` on string                   |      `39.02 ns` | `19,608,415 ops/s` |
| `isNumber` on number                   |      `37.68 ns` | `20,371,720 ops/s` |
| `isPlainObject` on object              |      `37.85 ns` | `20,250,036 ops/s` |
| `createEnumGuard` result on enum value |      `39.55 ns` | `19,332,792 ops/s` |

These are indicative micro-benchmark results from a single local machine. They are useful for relative comparisons inside this repository, not as a guarantee of identical performance in other runtimes or workloads.

## Development

```bash
npm run verify
npm run test:coverage
npm run build
npm run bench
npm run changeset
npm run changeset:version
npm run changeset:publish
```

## Verification

```bash
npm run format:check
npm run lint
npm run typecheck
npm test
npm run build
npm run test:package
npm run package:quality
npm run test:coverage
```

## Releases

- `npm run changeset` creates a release note entry for a package change.
- `npm run changeset:version` applies pending changesets and updates the changelog.
- `npm run release:publish` runs the full verification stack, coverage, and publishes through Changesets.
- `.github/workflows/release.yml` is a manual `workflow_dispatch` workflow for optional release publishing.
