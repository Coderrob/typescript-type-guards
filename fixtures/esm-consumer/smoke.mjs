import assert from 'node:assert/strict';

import {
  createEnumGuard,
  isPlainObject,
  isString,
} from '@coderrob/typescript-type-guards';
import packageMetadata from '@coderrob/typescript-type-guards/package.json' with { type: 'json' };

const isStatus = createEnumGuard(
  {
    Active: 'ACTIVE',
    Inactive: 'INACTIVE',
  },
  'Status',
);

assert.equal(packageMetadata.name, '@coderrob/typescript-type-guards');
assert.equal(isString('hello'), true);
const ANSWER = Number('42');

assert.equal(isPlainObject({ answer: ANSWER }), true);
assert.equal(isStatus('ACTIVE'), true);
assert.equal(isStatus('UNKNOWN'), false);
