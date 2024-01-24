import { defineConfig, splitVendorChunkPlugin as splitVendorChunk } from 'vite'
import legacy from '@vitejs/plugin-legacy'

/** @type {import('vite').UserConfig} */
const config = {
	base: './',
	build: {
		outDir: '.build'
	},
	plugins: [
		legacy(),
		splitVendorChunk()
	]
}

export default defineConfig(config)
