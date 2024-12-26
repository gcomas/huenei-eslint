import { FlatCompat } from '@eslint/eslintrc'
import { fileURLToPath } from 'url'
import path from 'path'
import pluginJs from '@eslint/js'
import semistandard from 'eslint-config-semistandard'
import tseslint from 'typescript-eslint'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const compat = new FlatCompat({
    baseDirectory: __dirname,
})

/** @type {{ plugins?: import('eslint').Linter.Config.plugins, rules?: import('eslint').Linter.Config.rules }} */
export default {
    plugins: [pluginJs.configs.recommended,
        ...tseslint.configs.recommended,
        ...compat.extends(semistandard.extends)],
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
}
