/// <reference types='vite/client' />

interface ImportMetaEnv {
	readonly VITE_X_API_BASE_URL?: string
	readonly VITE_ENVIRONMENT_DATA?: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
