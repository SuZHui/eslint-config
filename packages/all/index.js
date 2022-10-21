module.exports = {
  env: {
    es6: true,
    es2021: true,
    node: true,
  },
  globals: {
    document: 'readonly',
    navigator: 'readonly',
    window: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
  },
  rules: {
    'array-bracket-spacing': ['error', 'never'],
    'block-spacing': ['error', 'always'],
    'brace-style': ['error', 'stroustrup', { allowSingleLine: true }],
    'camelcase': 'off',
    'comma-spacing': ['error', { before: false, after: true }],
    'comma-style': ['error', 'last'],
    'curly': ['error', 'multi-or-nest', 'consistent'],
    'no-param-reassign': 'off',
    'no-unused-vars': 'warn',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single'],
    'no-constant-condition': 'warn',
    'no-console': ['error', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'func-call-spacing': ['off', 'never'],
    'key-spacing': ['error', { beforeColon: false, afterColon: true }],
    'indent': ['error', 2, { SwitchCase: 1, VariableDeclarator: 1, outerIIFEBody: 1 }],
    'semi': ['error', 'never'],
    'object-curly-spacing': ['error', 'always'],
    'no-return-await': 'off',
    'no-multiple-empty-lines': ['error', { max: 1, maxBOF: 0, maxEOF: 1 }],
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
  }
}