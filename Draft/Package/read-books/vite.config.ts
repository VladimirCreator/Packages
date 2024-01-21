import { defineConfig } from 'vite'
import type { UserConfig } from 'vite'

import react from '@vitejs/plugin-react'

const config: UserConfig = {
	plugins: [react()]
}

export default defineConfig(config)
