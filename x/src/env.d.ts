/// <reference types='vite/client' />

interface ImportMetaEnv {
	readonly VITE_X_API_BASE_URL?: string
	readonly VITE_ENVIRONMENT_DATA: any[]
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
