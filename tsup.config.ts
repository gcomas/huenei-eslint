import { defineConfig } from 'tsup'
import { execSync } from 'child_process'

export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['./src/index.js', './scripts/postinstall.js'],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true,
    onSuccess: async () => {
        try {
            console.log('Running ESLint...')
            execSync('npx eslint src', { stdio: 'inherit' })
        } catch (error) {
            console.error('ESLint failed. Fix the errors before building.')
            console.error(error)
            process.exit(1)
        }
        return Promise.resolve()
    },
})
