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
    'curly': ['error', 'multi-or-nest', 'consistent'],
    'no-param-reassign': 'off',
    'no-unused-vars': 'warn',
    'quote-props': ['error', 'consistent-as-needed'],
    'quotes': ['error', 'single'],
    'semi': ['error', 'never'],
    'sort-imports': [
      'error',
      {
        allowSeparatedGroups: false,
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
      },
    ]
  }
}