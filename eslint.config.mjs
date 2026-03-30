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
import zeroTolerance from '@coderrob/eslint-plugin-zero-tolerance';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'coverage/**',
      'eslint.config.mjs',
      'jest.config.js',
    ],
  },
  ...tseslint.configs.recommended,
  zeroTolerance.configs.strict,
  {
    rules: {
      complexity: ['error', { max: 3 }],
      'max-lines': [
        'error',
        { max: 20, skipComments: true, skipBlankLines: true },
      ],
      'max-lines-per-function': [
        'error',
        { max: 20, skipComments: true, skipBlankLines: true },
      ],
    },
  },
  {
    files: ['**/guards/types.ts'],
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
    },
  },
  {
    files: ['**/index.ts'],
    rules: {
      'max-lines': 'off',
    },
  },
  {
    files: ['**/guards/createEnumGuard.ts'],
    rules: {
      'max-lines': 'off',
    },
  },
  {
    files: ['**/__tests__/**/*.ts', '**/*.test.ts', '**/*.spec.ts'],
    rules: {
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'zero-tolerance/max-function-lines': 'off',
      'zero-tolerance/no-magic-numbers': 'off',
    },
  },
);
