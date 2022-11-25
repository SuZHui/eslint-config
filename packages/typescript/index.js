const ecmascript = require('@suzh/eslint-config-ecmascript')

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  ...ecmascript,
  overrides: [...ecmascript.overrides, {
    files: ['*.ts?(x)'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaVersion: 2018,
      sourceType: 'module',
      ecmaFeatures: { jsx: true },

      // typescript-eslint specific options
      warnOnUnsupportedTypeScriptVersion: true
    },
    extends: [
      'plugin:import/typescript',
      'plugin:@typescript-eslint/recommended'
    ],
    plugins: ['@typescript-eslint/eslint-plugin'],
    rules: {
      // TypeScript's `noFallthroughCasesInSwitch` option is more robust (#6906)
      'default-case': 'off',
      // 'tsc' already handles this
      //  (https://github.com/typescript-eslint/typescript-eslint/issues/291)
      'no-dupe-class-members': 'off',
      // 'tsc' already handles this
      // (https://github.com/typescript-eslint/typescript-eslint/issues/477)
      'no-undef': 'off',

      // Add TypeScript specific rules (and turn off ESLint equivalents)
      '@typescript-eslint/consistent-type-assertions': 'error',
      'no-array-constructor': 'off',
      '@typescript-eslint/no-array-constructor': 'error',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': [
        'error',
        {
          functions: false,
          classes: false,
          variables: false,
          typedefs: false
        }
      ],
      'no-unused-expressions': 'off',
      '@typescript-eslint/no-unused-expressions': [
        'error',
        {
          allowShortCircuit: true,
          allowTernary: true,
          allowTaggedTemplates: true
        }
      ],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          args: 'none',
          ignoreRestSiblings: true
        }
      ],
      'no-useless-constructor': 'off',
      '@typescript-eslint/no-useless-constructor': 'error',
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': ['error'],
      'no-shadow': 'off',
      '@typescript-eslint/no-shadow': ['error'],

      'import/named': 'off',

      // TS
      '@typescript-eslint/ban-ts-comment': ['error', { 'ts-ignore': 'allow-with-description' }],
      '@typescript-eslint/member-delimiter-style': ['error', { multiline: { delimiter: 'none' } }],
      '@typescript-eslint/type-annotation-spacing': ['error', {}],
      '@typescript-eslint/consistent-type-imports': ['error', { prefer: 'type-imports', disallowTypeAnnotations: false }],
      '@typescript-eslint/consistent-type-definitions': ['error', 'interface'],
      '@typescript-eslint/prefer-ts-expect-error': 'error',

      // Override JS
      'no-useless-constructor': 'off',
      'indent': 'off',
      '@typescript-eslint/indent': ['error', 2, {
        SwitchCase: 1,
        VariableDeclarator: 1,
        outerIIFEBody: 1,
        MemberExpression: 1,
        FunctionDeclaration: { parameters: 1, body: 1 },
        FunctionExpression: { parameters: 1, body: 1 },
        CallExpression: { arguments: 1 },
        ArrayExpression: 1,
        ObjectExpression: 1,
        ImportDeclaration: 1,
        flatTernaryExpressions: false,
        ignoreComments: false,
        ignoredNodes: [
          'TemplateLiteral *',
          'JSXElement',
          'JSXElement > *',
          'JSXAttribute',
          'JSXIdentifier',
          'JSXNamespacedName',
          'JSXMemberExpression',
          'JSXSpreadAttribute',
          'JSXExpressionContainer',
          'JSXOpeningElement',
          'JSXClosingElement',
          'JSXFragment',
          'JSXOpeningFragment',
          'JSXClosingFragment',
          'JSXText',
          'JSXEmptyExpression',
          'JSXSpreadChild',
          'TSTypeParameterInstantiation',
          'FunctionExpression > .params[decorators.length > 0]',
          'FunctionExpression > .params > :matches(Decorator, :not(:first-child))',
          'ClassBody.body > PropertyDefinition[decorators.length > 0] > .key'
        ],
        offsetTernaryExpressions: true
      }],
      'no-unused-vars': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      'no-redeclare': 'off',
      '@typescript-eslint/no-redeclare': 'error',
      'no-use-before-define': 'off',
      '@typescript-eslint/no-use-before-define': ['error', { functions: false, classes: false, variables: true }],
      'brace-style': 'off',
      '@typescript-eslint/brace-style': ['error', '1tbs', { allowSingleLine: false }],
      // 'comma-dangle': 'off',
      // '@typescript-eslint/comma-dangle': ['error', 'always-multiline'],
      'object-curly-spacing': 'off',
      '@typescript-eslint/object-curly-spacing': ['error', 'always'],
      'semi': 'off',
      '@typescript-eslint/semi': ['error', 'never'],
      'quotes': 'off',
      '@typescript-eslint/quotes': ['error', 'single'],
      'space-before-blocks': 'off',
      '@typescript-eslint/space-before-blocks': ['error', 'always'],
      'space-before-function-paren': 'off',
      '@typescript-eslint/space-before-function-paren': [
        'error',
        {
          anonymous: 'always',
          named: 'never',
          asyncArrow: 'always'
        }
      ],
      'space-infix-ops': 'off',
      '@typescript-eslint/space-infix-ops': 'error',
      'keyword-spacing': 'off',
      '@typescript-eslint/keyword-spacing': ['error', { before: true, after: true }],
      'comma-spacing': 'off',
      '@typescript-eslint/comma-spacing': ['error', { before: false, after: true }],
      'no-extra-parens': 'off',
      '@typescript-eslint/no-extra-parens': ['error', 'functions'],
      'no-dupe-class-members': 'off',
      '@typescript-eslint/no-dupe-class-members': 'error',
      'no-loss-of-precision': 'off',
      '@typescript-eslint/no-loss-of-precision': 'error',
      'lines-between-class-members': 'off',
      '@typescript-eslint/lines-between-class-members': ['error', 'always', { exceptAfterSingleLine: true }],

      // The following rule overrides require a parser service, aka. require a `typescript.json` path.
      // This needs to be done individually for each project, and it slows down linting significantly.
      // 'no-throw-literal': 'off',
      // '@typescript-eslint/no-throw-literal': 'error',
      // 'no-implied-eval': 'off',
      // '@typescript-eslint/no-implied-eval': 'error',
      // 'dot-notation': 'off',
      // '@typescript-eslint/dot-notation': ['error', { allowKeywords: true }],
      // '@typescript-eslint/no-floating-promises': 'error',
      // '@typescript-eslint/no-misused-promises': 'error',

      // off
      '@typescript-eslint/consistent-indexed-object-style': 'off',
      '@typescript-eslint/naming-convention': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/explicit-member-accessibility': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/parameter-properties': 'off',
      '@typescript-eslint/no-empty-interface': 'off',
      '@typescript-eslint/ban-ts-ignore': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/ban-types': 'off',
      '@typescript-eslint/no-namespace': 'off',
      '@typescript-eslint/triple-slash-reference': 'off'
    }
  }]
}
