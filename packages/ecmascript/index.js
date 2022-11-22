const basic = require('@suzh/eslint-config-basic')

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  ...basic,
  overrides: [...basic.overrides, {
    files: ['*.js?(x)', '*.mjs'],
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module',
    },
    plugins: ['unicorn'],
    rules: {
      'array-bracket-spacing': ['error', 'never'],
      'block-spacing': ['error', 'always'],
      'brace-style': ['error', '1tbs', { allowSingleLine: false }],
      'camelcase': 'off',
      'comma-spacing': ['error', { before: false, after: true }],
      'comma-style': ['error', 'last'],
      'curly': ['error', 'all'],
      'func-call-spacing': ['off', 'never'],
      'indent': ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
      'key-spacing': ['error', { beforeColon: false, afterColon: true }],
      'no-console': ['error', { allow: ['warn', 'error'] }],
      'no-constant-condition': 'warn',
      'no-debugger': 'error',
      'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
      'no-param-reassign': 'off',
      'no-return-await': 'off',
      'no-unused-vars': 'warn',
      'object-curly-spacing': ['error', 'always'],
      'quote-props': ['error', 'consistent-as-needed'],
      'quotes': ['error', 'single'],
      'semi': ['error', 'never'],
      'no-restricted-syntax': [
        'error',
        'DebuggerStatement',
        'LabeledStatement',
        'WithStatement',
      ],
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: false,
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
        },
      ],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always',
        },
      ],

      // best-practice
      'array-callback-return': 'error',
      'block-scoped-var': 'error',
      'complexity': ['off', 11],
      'consistent-return': 'off',
      'eqeqeq': ['error', 'smart'],
      'no-alert': 'warn',
      'no-case-declarations': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-return-assign': 'off',
      'no-useless-escape': 'off',
      'no-void': 'error',
      'no-with': 'error',
      'operator-linebreak': [
        'error',
        'after',
        { overrides: { '?': 'before', ':': 'before' } },
      ],
      'require-await': 'off',
      'vars-on-top': 'error',

      // unicorns
      // Pass error message when throwing errors
      'unicorn/error-message': 'error',
      // Uppercase regex escapes
      'unicorn/escape-case': 'error',
      // Array.isArray instead of instanceof
      'unicorn/no-instanceof-array': 'error',
      // Prevent deprecated `new Buffer()`
      'unicorn/no-new-buffer': 'error',
      // Keep regex literals safe!
      'unicorn/no-unsafe-regex': 'off',
      // Lowercase number formatting for octal, hex, binary (0x1'error' instead of 0X1'error')
      'unicorn/number-literal-case': 'error',
      // includes over indexOf when checking for existence
      'unicorn/prefer-includes': 'error',
      // String methods startsWith/endsWith instead of more complicated stuff
      'unicorn/prefer-string-starts-ends-with': 'error',
      // textContent instead of innerText
      'unicorn/prefer-dom-node-text-content': 'error',
      // Enforce throwing type error when throwing error while checking typeof
      'unicorn/prefer-type-error': 'error',
      // Use new when throwing error
      'unicorn/throw-new-error': 'error',
    },
  }]
}