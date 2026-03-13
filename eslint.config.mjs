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
  zeroTolerance.configs.recommended,
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
    files: ['**/__tests__/**/*.ts', '**/*.test.ts', '**/*.spec.ts'],
    rules: {
      'max-lines': 'off',
      'max-lines-per-function': 'off',
      'zero-tolerance/max-function-lines': 'off',
      'zero-tolerance/no-magic-numbers': 'off',
    },
  },
);
