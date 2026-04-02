const assert = require('node:assert/strict');

const ANSWER = Number('42');
const {
  createEnumGuard,
  isPlainObject,
  isString,
} = require('@coderrob/typescript-type-guards');
const packageMetadata = require('@coderrob/typescript-type-guards/package.json');

const isStatus = createEnumGuard(
  {
    Active: 'ACTIVE',
    Inactive: 'INACTIVE',
  },
  'Status',
);

assert.equal(packageMetadata.name, '@coderrob/typescript-type-guards');
assert.equal(isString('hello'), true);
assert.equal(isPlainObject({ answer: ANSWER }), true);
assert.equal(isStatus('ACTIVE'), true);
assert.equal(isStatus('UNKNOWN'), false);
