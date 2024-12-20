// eslint.config.mjs

import eslintPluginReact from 'eslint-plugin-react';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import typescriptEslintPlugin from '@typescript-eslint/eslint-plugin';

export default [
  {
    // Specify the files to lint
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      parserOptions: {
        tsconfigRootDir: process.cwd(), // Specify the root directory for TypeScript
      },
    },
    plugins: {
      react: eslintPluginReact, // Add React plugin
      '@typescript-eslint': typescriptEslintPlugin, // Add TypeScript plugin
      prettier: eslintPluginPrettier, // Add Prettier plugin for formatting checks
    },
    rules: {
      'prettier/prettier': 'error', // Enforce Prettier rules
      'react/react-in-jsx-scope': 'off', // React 17+ does not require React to be in scope
      'react/prop-types': 'off', // Disable PropTypes validation in TypeScript
      '@typescript-eslint/no-unused-vars': ['warn'], // Warn on unused vars
      '@typescript-eslint/no-explicit-any': 'warn', // Warn on the usage of `any`
    },
    settings: {
      react: {
        version: 'detect', // Automatically detect React version
      },
    },
  },
];
