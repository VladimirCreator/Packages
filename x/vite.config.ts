import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'

import react from '@vitejs/plugin-react-swc'

const config: UserConfig = {
	base: './',
	build: {
		outDir: '.build'
	},
	esbuild: {
		jsxInject: 'import React from \'react\''
	},
	plugins: [
		react()
	]
}

export default defineConfig(config)
