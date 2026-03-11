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
    files: ['**/__tests__/**/*.ts', '**/*.test.ts', '**/*.spec.ts'],
    rules: {
      'max-lines': 'off',
      'max-lines-per-function': 'off',
    },
  },
);
