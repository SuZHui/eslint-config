const basic = require('@suzh/eslint-config-basic')

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  ...basic,
  overrides: [...basic.overrides, {
    files: ['*.js?(x)', '*.mjs'],
    parserOptions: {
      ecmaVersion: 2022,
      sourceType: 'module'
    },
    plugins: ['unicorn'],
    rules: {
      'array-bracket-newline': ['error', 'consistent'],
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
        'WithStatement'
      ],
      'sort-imports': [
        'error',
        {
          allowSeparatedGroups: false,
          ignoreCase: false,
          ignoreDeclarationSort: true,
          ignoreMemberSort: false,
          memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single']
        }
      ],
      'space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always'
        }
      ],

      // best-practice
      'array-callback-return': 'error',
      'arrow-parens': ['error', 'always'],
      'arrow-spacing': 'error',
      'block-scoped-var': 'error',
      'complexity': ['error', 15],
      'consistent-return': 'off',
      'comma-dangle': ['error', 'never'],
      'default-case': ['error', { commentPattern: '^skip\\sdefault' }],
      'eol-last': ['error', 'always'],
      'dot-location': ['error', 'property'],
      'eqeqeq': ['error', 'smart'],
      'getter-return': 'error',
      'keyword-spacing': ['error', { before: true, after: true }],
      'linebreak-style': 'error',
      'max-classes-per-file': 'error',
      'max-depth': ['error', { max: 4 }],
      'max-len': [
        'error',
        {
          code: 80,
          ignoreComments: true,
          ignoreRegExpLiterals: true,
          ignoreStrings: true,
          ignoreTemplateLiterals: true,
          ignoreUrls: true,
          tabWidth: 2
        }
      ],
      'max-lines': ['error', { max: 300 }],
      'max-lines-per-function': ['error', { max: 200 }],
      'max-statements-per-line': ['error', { max: 1 }],
      'no-alert': 'warn',
      'no-case-declarations': 'error',
      'no-multi-spaces': 'error',
      'no-multi-str': 'error',
      'no-return-assign': 'off',
      'no-useless-escape': 'off',
      'no-void': 'error',
      'no-with': 'error',
      'no-caller': 'error',
      'no-cond-assign': ['error', 'except-parens'],
      'no-const-assign': 'error',
      'no-constant-condition': ['error', { checkLoops: false }],
      'no-control-regex': 'error',
      'no-delete-var': 'error',
      'no-dupe-args': 'error',
      'no-dupe-class-members': 'error',
      'no-dupe-keys': 'error',
      'no-duplicate-case': 'error',
      'no-empty-character-class': 'error',
      'no-empty-pattern': 'error',
      'no-eval': 'error',
      'object-curly-newline': ['error', { consistent: true, multiline: true }],
      'operator-linebreak': [
        'error',
        'after',
        { overrides: { '?': 'before', ':': 'before' } }
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
      // Enforces using an array literal instead of the Array constructor, but it still allows using the Array constructor with one argument. This rule fills that gap.
      'unicorn/no-new-array': 'error'
    }
  }]
}
