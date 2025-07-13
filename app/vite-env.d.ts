/// <reference types="vite/client" />

interface ViteTypeOptions {
	strictImportMetaEnv: unknown
}

interface ImportMetaEnv {
	readonly PUBLIC_CLERK_KEY: string
	readonly PUBLIC_JAZZ_KEY: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
