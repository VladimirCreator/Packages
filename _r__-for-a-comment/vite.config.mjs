import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/** @type {import('vite').UserConfig} */
const config = {
	base: './',
	build: {
		outDir: '.build'
	},
	plugins: [
		react()
	]
}

export default defineConfig(config)
