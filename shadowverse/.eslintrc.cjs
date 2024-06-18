module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:react/jsx-runtime",
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  "parserOptions": {
    "project": "./tsconfig.eslint.json",
    "sourceType": "module",
    "ecmaVersion": "latest",
    "ecmaFeatures": {
      "jsx": true
    }
  },
  plugins: [
    'react-refresh',
    'perfectionist',
    'react',
    'unused-imports',
    'prettier'// Add the plugin here
  ],
  rules: {
    "quotes": [2, "single", { "avoidEscape": true }],
    "perfectionist/sort-objects": [
      "error",
      {
        "type": "natural",
        "order": "asc"
      }
    ],

    "linebreak-style": ["error", "unix"],

    "no-unused-vars": "warn",
    "no-underscore-dangle": "off",

    /** Plugin overwrites */
    // Unused Imports
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": [
      "warn",
      { "vars": "all", "varsIgnorePattern": "^_", "args": "after-used", "argsIgnorePattern": "^_" }
    ],

    // Typescript
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/naming-convention": "off",
    "@typescript-eslint/no-explicit-any": "warn",

    // React
    "react/function-component-definition": "off",
    "react/require-default-props": "off",
    "react/jsx-props-no-spreading": "off",
    "react/react-in-jsx-scope": "off",
    "react/jsx-filename-extension": ["error", {
      "extensions": [".js", ".jsx", ".tsx"]
    }],
    "react/display-name": "error",
    "react/no-unescaped-entities": "off",

    // React hooks
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",

    // Import
    "import/no-extraneous-dependencies": "off",
    "import/extensions": "off",
    "import/named": "off",
    "import/no-unresolved": "off",
    "import/no-named-as-default-member": "off",
    "import/prefer-default-export": "off",

    // Perfectionist
    // "perfectionist/sort-jsx-props": ["error"],
    "perfectionist/sort-enums": ["error"],
    "perfectionist/sort-union-types": ["error", {
      "nullable-last": true
    }],
    "perfectionist/sort-exports": ["error"],
    "perfectionist/sort-named-imports": ["error"],

    // Prettier
    "prettier/prettier": "error",
  },
}
