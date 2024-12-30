import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'node:url'
import globals from 'globals'
import path from 'node:path'
import pluginJs from '@eslint/js'
import semistandard from 'eslint-config-semistandard'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

/** @type {import('eslint').Linter.Config[]} */
export default [
    { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
    { languageOptions: { globals: globals.browser } },
    pluginJs.configs.recommended,
    ...tseslint.configs.recommended,
    ...compat.extends(semistandard.extends),
    {
        rules: {
            indent: ['warn', 4],
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
            'comma-dangle': ['error', 'always-multiline'],
            '@typescript-eslint/consistent-type-imports': 'error',
            'sort-imports': ['warn', {
                ignoreCase: false,
                ignoreDeclarationSort: false,
                ignoreMemberSort: false,
                memberSyntaxSortOrder: ['none', 'all', 'multiple', 'single'],
                allowSeparatedGroups: false,
            }],
            quotes: ['warn', 'single', { avoidEscape: true }],
        },
        ignores: ['node_modules', 'dist', 'rules'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
    },
]
