import { defineConfig } from 'vite'

/** @type {import('vite').UserConfig} */
const config = {
	base: './',
	build: {
		outDir: '.build'
	}
}

export default defineConfig(config)
