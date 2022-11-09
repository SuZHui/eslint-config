const tsOverride = require('@suzh/eslint-config-typescript')

/** @type {import('eslint').ESLint.ConfigData} */
module.exports = {
  extends: [
    '@suzh/eslint-config-basic',
  ],
  overrides: [tsOverride]
}