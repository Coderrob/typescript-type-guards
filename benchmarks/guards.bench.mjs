import { Bench } from 'tinybench';

import {
  createEnumGuard,
  isNumber,
  isPlainObject,
  isString,
} from '../dist/index.mjs';

const ITERATION_COUNT = Number('10000');
const BENCH_DURATION_MS = Number('100');
const NUMERIC_VALUE = Number('42');

const isStatus = createEnumGuard(
  {
    Active: 'ACTIVE',
    Inactive: 'INACTIVE',
  },
  'Status',
);

const bench = new Bench({
  iterations: ITERATION_COUNT,
  time: BENCH_DURATION_MS,
});

/** Benchmarks an enum guard against a positive enum value input. */
function benchmarkEnumGuard() {
  isStatus('ACTIVE');
}

/** Benchmarks `isNumber` against a positive number input. */
function benchmarkNumberGuard() {
  isNumber(NUMERIC_VALUE);
}

/** Benchmarks `isPlainObject` against a plain object input. */
function benchmarkPlainObjectGuard() {
  isPlainObject({ answer: NUMERIC_VALUE });
}

/** Benchmarks `isString` against a positive string input. */
function benchmarkStringGuard() {
  isString('guard');
}

bench
  .add('isString on string', benchmarkStringGuard)
  .add('isNumber on number', benchmarkNumberGuard)
  .add('isPlainObject on object', benchmarkPlainObjectGuard)
  .add('createEnumGuard result on enum value', benchmarkEnumGuard);

await bench.run();

console.table(bench.table());
