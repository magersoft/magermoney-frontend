import { createFetch } from '@vueuse/core';

import { useAuthStore } from '@/app/auth/infrastructure/stores';

import { appConfig } from '../../config';

export const useApiFetch = createFetch({
	baseUrl: appConfig.apiBaseUrl,
	options: {
		async beforeFetch({ options }) {
			const { accessToken } = useAuthStore();
			options.headers = {
				...options.headers,
				Authorization: `Bearer ${accessToken}`
			};

			return { options };
		},
		async onFetchError(ctx) {
			return {
				...ctx,
				error: {
					...ctx.data
				}
			};
		}
	},
	fetchOptions: {
		mode: 'cors'
	}
});
