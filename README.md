# @coderrob/typescript-type-guards

<p align="center">
  <img src="public/img/typescript-type-guard-logo.png" alt="typescript-type-guards logo" />
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/@coderrob/typescript-type-guards">
    <img src="https://img.shields.io/npm/v/%40coderrob%2Ftypescript-type-guards?logo=npm&logoColor=white" alt="npm version" />
  </a>
  <a href="https://www.npmjs.com/package/@coderrob/typescript-type-guards">
    <img src="https://img.shields.io/npm/dm/%40coderrob%2Ftypescript-type-guards?logo=npm&logoColor=white" alt="npm downloads" />
  </a>
  <a href="https://github.com/Coderrob/typescript-type-guards/actions/workflows/ci.yml">
    <img src="https://img.shields.io/github/actions/workflow/status/Coderrob/typescript-type-guards/ci.yml?branch=main&label=ci" alt="CI status" />
  </a>
  <img src="https://img.shields.io/badge/coverage-100%25-brightgreen" alt="Coverage 100%" />
  <a href="LICENSE">
    <img src="https://img.shields.io/badge/license-Apache%202.0-blue.svg" alt="Apache 2.0 license" />
  </a>
  <img src="https://img.shields.io/badge/node-20%20%7C%2022%20%7C%2024-339933?logo=node.js&logoColor=white" alt="Node.js 20, 22, and 24" />
</p>

Reusable TypeScript type guards for narrowing `unknown` values in application and library code.

## Installation

```bash
npm install @coderrob/typescript-type-guards
```

The package and its development tooling require Node.js `^20`, `^22`, or `^24`.

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

Package metadata can also be resolved explicitly when needed:

```js
const packageMetadata = require('@coderrob/typescript-type-guards/package.json');
```

```ts
import packageMetadata from '@coderrob/typescript-type-guards/package.json' with { type: 'json' };
```

Type declarations are emitted during build and included in the published package.

The published tarball also includes the root `README.md`, `LICENSE`, and `package.json`. Those top-level files are included automatically by npm and are not copied into `dist/`.

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

See also:

- `CONTRIBUTING.md` for local setup, verification, and contribution expectations
- `CHANGELOG.md` for release history

```bash
npm run verify
npm run test:coverage
npm run build
npm run bench
npm run changeset
npm run release:version
npm run release:changesets
npm run publish:package
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
- `npm run release:version` applies pending changesets and updates the changelog.
- `npm run release:changesets` runs the full verification stack, coverage, and then publishes through Changesets. In GitHub Actions, this release path also publishes with provenance.
- `npm run publish:package` performs a direct npm publish with a dry-run pack check first.
- `.github/workflows/release.yml` is a manual `workflow_dispatch` workflow for optional release publishing.
