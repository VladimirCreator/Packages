import { defineConfig, splitVendorChunkPlugin as splitVendorChunk } from 'vite'
import legacy from '@vitejs/plugin-legacy'

export default defineConfig({
	plugins: [splitVendorChunk(), legacy()]
})
