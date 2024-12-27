# Extend ESLint Configuration

This guide explains how to extend an existing ESLint configuration in your project. By extending a shared or base configuration, you can standardize linting rules across multiple projects while still allowing for customizations.

## Prerequisites

Ensure you have the following installed:

- **Node.js**: Version 14 or later.
- **npm** or **yarn**: For managing dependencies.
- **ESLint**: Installed globally or locally in your project.

## Installation

1. **Install ESLint** (if not already installed):
```bash
npm install eslint --save-dev
```

## Install the shared ESLint configuration package
 Add the following packages that are neccesary to make the configuration work.

```bash
 npm install @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint-config-semistandard eslint-plugin-n eslint-plugin-oxlint eslint-plugin-promise globals standard typescript
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

```json
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