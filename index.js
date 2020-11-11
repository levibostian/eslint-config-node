module.exports = {
  "rules": {
    "semi": "off",
    "no-process-env": "error",
    "no-await-in-loop": "error",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-unused-vars": "off", // note you must disable the base rule as it can report incorrect errors
    "@typescript-eslint/no-unused-vars": [
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
      "error",
      {
        "args": "none"
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "no-public",
        "overrides": {
          "parameterProperties": "off",
          "properties": "explicit"
        }
      }
    ],
    "@typescript-eslint/no-parameter-properties": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "none",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": false
        }
      }
    ],
    "no-use-before-define": "off", // note you must disable the base rule as it can report incorrect errors
    "@typescript-eslint/no-use-before-define": [
      // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-use-before-define.md
      "error",
      {
        "functions": true,
        "classes": false
      }
    ],
    "@typescript-eslint/explicit-function-return-type": [
      "error",
      {
        "allowExpressions": true,
        "allowTypedFunctionExpressions": true,
        "allowHigherOrderFunctions": false
      }
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/ban-types": "off",
    "jest/prefer-called-with": "error",
    "jest/prefer-hooks-on-top": "error",
    "jest/no-truthy-falsy": "error",
    "jest/valid-title": "error"
  }
};