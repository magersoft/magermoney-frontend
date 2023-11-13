import { fileURLToPath, URL } from 'node:url';

import { VantResolver } from '@vant/auto-import-resolver';
import vue from '@vitejs/plugin-vue';
import fs from 'fs';
import { resolve } from 'path';
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { defineConfig, loadEnv } from 'vite';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');
	const isDev = env.NODE_ENV !== 'production';

	return {
		plugins: [
			vue(),
			AutoImport({
				imports: ['vue'],
				dts: 'src/types/auto-imports.d.ts'
			}),
			Components({
				resolvers: [VantResolver()],
				dts: 'src/types/components.d.ts'
			})
		],
		define: { 'process.env': env },
		resolve: {
			alias: {
				'@': fileURLToPath(new URL('./src', import.meta.url))
			},
			extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue']
		},
		server: {
			port: parseInt(env.VITE_APP_PORT, 10) || 3000,
			https: {
				key: fs.readFileSync(resolve(__dirname, env.SSL_KEY_PATH)),
				cert: fs.readFileSync(resolve(__dirname, env.SSL_CERT_PATH))
			}
		},
		css: {
			modules: {
				generateScopedName: isDev
					? '[local]_[hash:base64:5]'
					: '[hash:base64:5]'
			}
		}
	};
});
