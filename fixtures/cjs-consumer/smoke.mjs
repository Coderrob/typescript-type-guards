import assert from 'node:assert/strict';
import { createRequire } from 'node:module';

const ANSWER = Number('42');
const requirePackage = createRequire(import.meta.url);
const { createEnumGuard, isPlainObject, isString } = requirePackage(
  '@coderrob/typescript-type-guards',
);

const isStatus = createEnumGuard(
  {
    Active: 'ACTIVE',
    Inactive: 'INACTIVE',
  },
  'Status',
);

assert.equal(isString('hello'), true);
assert.equal(isPlainObject({ answer: ANSWER }), true);
assert.equal(isStatus('ACTIVE'), true);
assert.equal(isStatus('UNKNOWN'), false);
