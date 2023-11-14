import { createFetch } from '@vueuse/core';

import { useAuth } from '@/app/auth';
import { useAuthStore } from '@/app/auth/infrastructure/stores';
import { ResponseStatuses } from '@/shared/types/api';

import { appConfig } from '../../config';

export const useApiFetch = createFetch({
	baseUrl: appConfig.apiBaseUrl,
	options: {
		async beforeFetch({ options }) {
			const { accessToken } = useAuthStore();
			options.headers = {
				...options.headers,
				Authorization: `Bearer ${unref(accessToken)}`
			};

			return { options };
		},
		async onFetchError(ctx) {
			const { resetAuthState } = useAuth();

			if (ctx.response?.status === ResponseStatuses.Unauthorized) {
				resetAuthState();

				setTimeout(() => {
					window.location.reload();
				}, 3000);
			}

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
