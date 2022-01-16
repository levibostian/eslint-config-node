module.exports = {
  "rules": {
    "semi": "off",
    "no-process-env": "error",
    "no-await-in-loop": "error",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/no-namespace": "off",
    "@typescript-eslint/no-non-null-assertion": "off",
    "no-unused-vars": "off", // note you must disable the base rule as it can report incorrect errors
    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
    // args: none - I like knowing all of the parameter options that I have in my code. I don't like removing them and I forget they are options. 
    "@typescript-eslint/no-unused-vars": ["error", {"args": "none", "caughtErrors": "all"}],
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
    "@typescript-eslint/naming-convention": ["error", 
        {
          selector: 'default',
          format: ['camelCase'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'variable',
          format: ['camelCase', 'UPPER_CASE'],
          leadingUnderscore: 'allow',
          trailingUnderscore: 'allow',
        },
        {
          selector: 'typeLike',
          format: ['PascalCase'],
        }, 
        {
          selector: 'enumMember',
          format: ['PascalCase', 'UPPER_CASE']
        }, 
        { 
          // Sure, I am not the biggest fan of allowing snake_case in object properties but it's allowed because of common scenarios like creating query strings. This is a node web server. We deal with that often. 
          // PascalCase - We use HTTP headers here. { Authorization: '' }, for example, needs to be allowed. 
          selector: 'objectLiteralProperty',
          format: ['camelCase', 'snake_case', 'PascalCase']
        }, 
        { 
          // Type property is similar use cases to objectLiteralProperty. Type properties is defining interfaces/types in Typescript. 
          selector: 'typeProperty',
          format: ['camelCase', 'snake_case', 'PascalCase']
        }
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/ban-types": "off",
    "jest/prefer-called-with": "error",
    "jest/prefer-hooks-on-top": "error",
    "jest/valid-title": "error"
  }
};