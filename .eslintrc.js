module.exports = {
  env: {
    es6: true,
    node: true
  },
  extends: "eslint:recommended",
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module",
  },
  globals: {
    React: true
  },

  ecmaFeatures: {
    jsx: true
  },

  plugins: ["react"],
  rules: {
    indent: ["error", "tab"],
    "linebreak-style": ["error", "unix"],
    quotes: ["error", "double"],
    "no-unused-vars": [2, {"vars": "all", "args": "after-used"}],
    "react/jsx-uses-react": 1,
    "react/jsx-uses-vars": 1,
    "react/react-in-jsx-scope": 1,
  }
};