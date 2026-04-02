import assert from 'node:assert/strict';

import {
  createEnumGuard,
  isPlainObject,
  isString,
} from '@coderrob/typescript-type-guards';

const isStatus = createEnumGuard(
  {
    Active: 'ACTIVE',
    Inactive: 'INACTIVE',
  },
  'Status',
);

assert.equal(isString('hello'), true);
assert.equal(isPlainObject({ answer: 42 }), true);
assert.equal(isStatus('ACTIVE'), true);
assert.equal(isStatus('UNKNOWN'), false);
