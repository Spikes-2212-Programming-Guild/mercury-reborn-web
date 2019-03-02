module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: 'eslint:recommended',
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  globals: {
    React: true,
    localStorage: true
  },

  ecmaFeatures: {
    jsx: true
  },

  plugins: ['react'],
  rules: {
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'double'],
    'no-unused-vars': [2, {'vars': 'all', 'args': 'after-used'}],
    'react/jsx-uses-react': 1,
    'react/jsx-uses-vars': 1,
    'react/react-in-jsx-scope': 1,
    'no-console': 'off',
    'react/jsx-indent': [2, 2, {checkAttributes: true}],
    'react/jsx-first-prop-new-line': 2,
    'react/jsx-max-props-per-line': [2, {'when': 'multiline'}],
    'react/jsx-one-expression-per-line': [2, {'allow': 'single-child'}],
    'react/jsx-wrap-multilines': [2, {'arrow': 'parens-new-line', 'return': 'parens-new-line'}]
  }
}
