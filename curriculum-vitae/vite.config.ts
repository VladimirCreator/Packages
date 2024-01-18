import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'

import react from '@vitejs/plugin-react'

const config: UserConfig = {
	build: {
		rollupOptions: {
			output: {
				manualChunks: {
					'lucide-react': ['lucide-react']
				}
			}
		}
	},
	plugins: [
		react()
	]
}

export default defineConfig(config)
