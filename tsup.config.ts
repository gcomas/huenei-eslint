import { defineConfig } from 'tsup'

export default defineConfig({
    format: ['cjs', 'esm'],
    entry: ['./src/index.js', './scripts/postinstall.js'],
    dts: true,
    shims: true,
    skipNodeModulesBundle: true,
    clean: true
})
