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
        'react/display-name': 'off'
      }
    }
  ]
};
