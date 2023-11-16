import { createFetch } from '@vueuse/core';
import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { useAuthStore } from '@/modules/auth/infrastructure/stores';
import { ResponseStatuses } from '@/shared/types/api';

import { appConfig } from '../../config';

export const useApiFetch = () => {
	const router = useRouter();

	const fetch = createFetch({
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
				const { resetAuthState } = useAuthStore();

				if (
					ctx.response?.status === ResponseStatuses.InternalServerError ||
					ctx.error.message === 'Failed to fetch'
				) {
					router.push({ name: AppRoutes.InternalServerError });
				}

				if (ctx.response?.status === ResponseStatuses.Unauthorized) {
					resetAuthState();
					router.push({ name: AppRoutes.Login });
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

	return {
		fetch
	};
};
