/*
 * Copyright 2026 Robert Lindley
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { defineConfig } from 'eslint/config';

import zeroTolerance from '@coderrob/eslint-plugin-zero-tolerance';
import tseslint from 'typescript-eslint';

const GENERAL_IGNORES = [
  'coverage/**',
  'dist/**',
  'eslint.config.mjs',
  'node_modules/**',
  'scripts/**',
];
const MAX_LINES_RULE = [
  'error',
  { max: 25, skipComments: true, skipBlankLines: true },
];
const MAX_LINES_EXEMPT_FILES = [
  '**/*.spec.ts',
  '**/*.test.ts',
  '**/__tests__/**/*.ts',
  '**/guards/createEnumGuard.ts',
  '**/index.ts',
  'benchmarks/**/*.mjs',
];

export default defineConfig(
  {
    ignores: GENERAL_IGNORES,
  },
  ...tseslint.configs.recommended,
  zeroTolerance.configs.strict,
  {
    rules: {
      complexity: ['error', { max: 3 }],
      'max-lines': MAX_LINES_RULE,
      'max-lines-per-function': MAX_LINES_RULE,
    },
  },
  {
    files: ['**/guards/types.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: MAX_LINES_EXEMPT_FILES,
    rules: {
      'max-lines': 'off',
    },
  },
  {
    files: ['fixtures/**/*.cjs'],
    rules: {
      '@typescript-eslint/no-require-imports': 'off',
      'zero-tolerance/no-dynamic-import': 'off',
    },
  },
);
