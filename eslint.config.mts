import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-config-prettier';
import pluginPrettier from 'eslint-plugin-prettier';

/**
 * ESLint 9+ flat config para TypeScript + Prettier (CommonJS)
 */
export default tseslint.config(
  eslint.configs.recommended, // Reglas base de ESLint
  ...tseslint.configs.recommended, // Reglas para TypeScript
  prettier, // Desactiva reglas que entran en conflicto con Prettier
  {
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          argsIgnorePattern: '^_',
        },
      ],
      'no-console': 'off',
      'prettier/prettier': [
        'error',
        {
          semi: true,
          singleQuote: true,
          trailingComma: 'es5',
          tabWidth: 2,
          printWidth: 100,
        },
      ],
    },
    ignores: ['node_modules', 'dist', 'coverage'],
  }
);
