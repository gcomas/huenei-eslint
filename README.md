

<div align="center">

![Logo](https://i.postimg.cc/sgH6RJ39/logo-eslint.jpg)

# Extend ESLint Configuration

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT) [![Version](https://img.shields.io/github/package-json/v/gcomas/huenei-eslint.svg)](https://github.com/gcomas/huenei-eslint) [![npm](https://img.shields.io/badge/npm-v10.8.2-green.svg)](https://www.npmjs.com/)

This guide explains how to extend an existing ESLint configuration in your project. By extending a shared or base configuration, you can standardize linting rules across multiple projects while still allowing for customizations.

</div>

## Installation

```bash
npm install @gcomas/huenei-eslint
```

## Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 14 or later.
- **npm** or **yarn**: For managing dependencies.
- **ESLint**: Install locally in your project:
```bash
npm install eslint --save-dev
```

---

## Usage

 ### Customize ESLint Config file

Add the extended configuration to the config file.

**eslint.config.js**

```javascript
import yourLinterName from '@projectName'

/** @type {import('eslint').Linter.Config[]} */
export default [
   { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] }, // affected extensions
   { languageOptions: { globals: globals.browser } }, 
   ...yourLinterName.plugins, // extends plugins
   {
      rules: {
            ...yourLinterName.rules, // extends rules
      },
      ignores: ['node_modules', 'dist'],
      languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
      },
   },
]
```

### Run ESLint in your project

Add a script to your **package.json**:

```json
{
   "scripts": {
      "lint": "eslint .",
      "lint:fix": "eslint . --fix"
   }
}
```

Then run

```bash
npm run lint
```

---

## Customizing the Configuration

You can override or add specific rules or add more extensions to tailor the ESLint configuration to your project's needs. Place these overrides under the rules section in your **.eslint.config.js** file.

```javascript
import yourLinterName from '@projectName'

/** @type {import('eslint').Linter.Config[]} */
export default [
   { languageOptions: { globals: globals.browser } }, 
   ...yourLinterName.plugins,
   ..newExtensions // add more extension rules
   {
      rules: {
            ...yourLinterName.rules,
            indent: ['error', 4] // override rules
      },
   },
]
```
