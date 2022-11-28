/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  overrides: [
    {
      files: ['*.jsx', '*.tsx'],
      plugins: ['react'],
      extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended'
      ],
      settings: {
        react: { version: 'detect' }
      },
      rules: {
        'react/react-in-jsx-scope': 'off',
        'react/display-name': 'off',
        // overrides
        'react-hooks/exhaustive-deps': 'warn',
        'react-hooks/rules-of-hooks': 'error',
        // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
        'react/forbid-foreign-prop-types': ['error', { allowInPropTypes: true }],
        'react/jsx-filename-extension': ['error', { extensions: ['.jsx', '.tsx'] }],
        'react/jsx-indent': ['error', 2],
        'react/jsx-indent-props': ['error', 2],
        'react/jsx-no-comment-textnodes': 'error',
        'react/jsx-no-duplicate-props': 'error',
        'react/jsx-no-target-blank': 'error',
        'react/jsx-no-undef': 'error',
        'react/jsx-pascal-case': [
          'error',
          {
            allowAllCaps: true,
            ignore: []
          }
        ],
        'react/jsx-uses-react': 'error',
        'react/jsx-uses-vars': 'error',
        'react/no-danger-with-children': 'error',
        // Disabled because of undesirable warnings
        // See https://github.com/facebook/create-react-app/issues/5204 for
        // blockers until its re-enabled
        // 'react/no-deprecated': 'error',
        'react/no-direct-mutation-state': 'error',
        'react/no-is-mounted': 'error',
        'react/no-typos': 'error',
        'react/require-render-return': 'error',
        'react/self-closing-comp': [
          'error',
          {
            component: true,
            html: true
          }
        ],
        'react/style-prop-object': 'error'
      }
    }
  ]
};
