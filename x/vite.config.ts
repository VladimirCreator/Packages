import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

export default defineConfig({
	esbuild: {
		jsxInject: 'import React from "react"'
	},
	plugins: [
		react()
	]
})
