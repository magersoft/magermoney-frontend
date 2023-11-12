/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_APP_PORT: number;
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
