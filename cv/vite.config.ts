import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const config: ReturnType<typeof defineConfig> = {
	plugins: [react()]
} as const

export default defineConfig(config)
