import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import jsxA11y from 'eslint-plugin-jsx-a11y';
import prettier from 'eslint-plugin-prettier';
import importPlugin from 'eslint-plugin-import';

export default tseslint.config(
  { ignores: ['dist', 'node_modules', 'build'] },
  {
    parser: tsParser,
    extends: [
      js.configs.recommended,
      'plugin:@typescript-eslint/recommended',
      'plugin:@typescript-eslint/recommended-requiring-type-checking',
      'plugin:react/recommended',
      'plugin:react-hooks/recommended',
      'plugin:jsx-a11y/recommended',
      'plugin:prettier/recommended',
      'plugin:import/errors',
      'plugin:import/warnings',
      'plugin:import/typescript',
    ],

    parserOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      ecmaFeatures: {
        jsx: true,
      },
      project: './tsconfig.json',
    },
    settings: {
      react: {
        version: 'detect',
      },
      'import/resolver': {
        typescript: {}, // This loads <rootdir>/tsconfig.json to ESLint
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      },
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      'jsx-a11y': jsxA11y,
      'prettier': prettier,
      'import': importPlugin,
    },
    rules: {
      // TypeScript Rules
      '@typescript-eslint/explicit-function-return-type': ['warn', { allowExpressions: true, allowTypedFunctionExpressions: true }],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-inferrable-types': 'warn',
      '@typescript-eslint/no-non-null-assertion': 'warn',
      '@typescript-eslint/no-empty-function': ['warn', { allow: ['arrowFunctions'] }],
      '@typescript-eslint/consistent-type-definitions': ['warn', 'interface'], // Prefer interface over type
      '@typescript-eslint/prefer-optional-chain': 'warn',
      '@typescript-eslint/explicit-module-boundary-types': 'off', // Can be annoying, usually better off

      // React Rules
      'react/jsx-uses-react': 'off', // Not needed with React 17+
      'react/react-in-jsx-scope': 'off', // Not needed with React 17+
      'react/jsx-boolean-value': ['warn', 'never'], // Omit `true` in boolean props
      'react/self-closing-comp': 'warn', // Enforce self-closing tags
      'react/jsx-no-useless-fragment': 'warn', // Avoid unnecessary fragments
      'react/jsx-pascal-case': ['warn', { allowAllCaps: true, ignore: [] }], // Enforce PascalCase for user-defined JSX components
      'react/no-array-index-key': 'warn', // Discourage using array index as key in lists
      'react/no-danger': 'warn', // Avoid using `dangerouslySetInnerHTML`
      'react/no-deprecated': 'warn', // Prevent usage of deprecated methods
      'react/no-direct-mutation-state': 'error', // Prevent direct mutation of state
      'react/no-unknown-property': 'warn', // Ensure proper casing of DOM properties
      'react/prop-types': 'off', // Not needed with TypeScript
      'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
      'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],

      // Accessibility (jsx-a11y) Rules
      'jsx-a11y/anchor-is-valid': ['warn', { aspects: ['noHref', 'invalidHref', 'preferButton'] }],
      'jsx-a11y/alt-text': 'warn', // Ensure alt text is provided on images
      'jsx-a11y/no-autofocus': 'warn', // Avoid autoFocus attribute
      'jsx-a11y/label-has-associated-control': ['warn', { assert: 'either' }],
      'jsx-a11y/interactive-supports-focus': 'warn', // Ensure interactive elements are focusable
      'jsx-a11y/no-static-element-interactions': 'warn', // Avoid static elements used as interactive
      'jsx-a11y/click-events-have-key-events': 'warn', // Ensure click events are paired with key events

      // Import Rules
      'import/order': [
        'warn',
        {
          groups: [['builtin', 'external'], 'internal', ['parent', 'sibling', 'index']],
          'newlines-between': 'always',
          alphabetize: { order: 'asc', caseInsensitive: true },
        },
      ],
      'import/no-unresolved': 'error', // Ensure imports are resolved
      'import/no-duplicates': 'warn', // Disallow duplicate imports
      'import/newline-after-import': 'warn', // Require a newline after import statements
      'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/*.test.ts', '**/*.spec.ts', '**/setupTests.ts'] }],

      // Prettier Integration
      'prettier/prettier': [
        'warn',
        {
          singleQuote: true,
          trailingComma: 'all',
          bracketSpacing: true,
          jsxBracketSameLine: false,
          printWidth: 80,
          tabWidth: 2,
          useTabs: false,
          semi: true,
          endOfLine: 'auto',
        },
      ],

      // Best Practices and Code Quality
      'no-console': 'warn', // Warn on console usage
      'no-debugger': 'error', // Disallow debugger statements
      'no-var': 'error', // Enforce let/const over var
      'prefer-const': 'warn', // Suggest using const if variables are not reassigned
      'prefer-arrow-callback': 'warn', // Prefer arrow functions as callbacks
      'arrow-body-style': ['warn', 'as-needed'], // Enforce no braces where they can be omitted
      'no-unused-expressions': 'warn', // Disallow unused expressions
      'no-shadow': 'warn', // Disallow variable declarations from shadowing variables in the outer scope
      'no-multi-spaces': 'warn', // Disallow multiple spaces except for indentation
      'no-trailing-spaces': 'warn', // Disallow trailing spaces
      'eol-last': ['warn', 'always'], // Enforce at least one newline at the end of files
      'spaced-comment': ['warn', 'always', { exceptions: ['-', '+'] }], // Require space after comments
      'comma-dangle': ['warn', 'always-multiline'], // Require trailing commas in multiline objects, arrays, etc.
      'object-shorthand': ['warn', 'always'], // Enforce using object shorthand
      'no-duplicate-imports': 'warn', // Disallow duplicate imports
    },
    env: {
      browser: true,
      es6: true,
      node: true,
    },
  },
);
