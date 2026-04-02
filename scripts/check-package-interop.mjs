import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const cjs = require('../dist/index.js');
const esm = await import(new URL('../dist/index.mjs', import.meta.url).href);

/**
 * Throws when a named export is missing from either package format.
 *
 * @param {string} exportName - The export name to validate.
 * @returns {void}
 * @throws {Error} When the export is missing from the CommonJS or ESM build.
 */
function assertExport(exportName) {
  if (typeof cjs[exportName] !== 'function') {
    throw new Error(`Missing CommonJS export: ${exportName}`);
  }

  if (typeof esm[exportName] !== 'function') {
    throw new Error(`Missing ESM export: ${exportName}`);
  }
}

for (const exportName of [
  'isString',
  'isNumber',
  'isPlainObject',
  'createTypeGuard',
  'createEnumGuard',
]) {
  assertExport(exportName);
}

if (!cjs.isString('hello') || !esm.isString('hello')) {
  throw new Error('Built package interop smoke test failed');
}
