[![npm latest version](https://img.shields.io/npm/v/@levibostian/eslint-config-node/latest.svg)](https://www.npmjs.com/package/@levibostian/eslint-config-node)
[![Actions Status](https://github.com/levibostian/eslint-config-node/workflows/Deployment/badge.svg)](https://github.com/levibostian/eslint-config-node/actions)

# @levibostian/eslint-config-node

[Sharable eslint config file](https://eslint.org/docs/developer-guide/shareable-configs) I use for my nodejs projects. 

# Getting started 

1. Install your dependencies: 

```bash
npm install -D @levibostian/eslint-config-node

# These are modules that are required by the shareable config
npm install -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-plugin-jest
```

2. Enable the config by adding to your existing `.eslintrc.json` file:

```
module.exports = {
  "parser": "@typescript-eslint/parser",
  "plugins": ["jest"],
  "extends": ["plugin:@typescript-eslint/recommended", "plugin:jest/recommended",  "@levibostian/eslint-config-node"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  }
};
```

# Development 

* Setup 

```
npm install
```

* Test this config file out in a nodejs project you have on your local computer. In this project run `npm link` then in your project you want to test on run `npm link @levibostian/eslint-config-node`. 

* This project follows a strict semantic versioning policy. The policy is enforced on the CI server where it will not allow you to merge your PR unless your commit messages are in the correct format. To learn more, check out [this doc](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#-git-commit-guidelines). 

* Keep the `peerDependencies` in `package.json` up-to-date with latest releases. If you need to add a plugin requirement, add it in that list, too. 

* Make a PR, the team will merge it in, the a release will be made. 

# License 

See [LICENSE](LICENSE.md)