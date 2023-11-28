import { createFetch } from '@vueuse/core';
import { useRouter } from 'vue-router';

import { appConfig } from '@/app/config';
import { AppRoutes } from '@/app/router/constants';
import { useAuthStore } from '@/modules/auth/infrastructure/stores';
import { useCatchErrors } from '@/shared/features/useCatchErrors.ts';

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
				const {
					catchInternalServerError,
					catchNotFoundError,
					catchUnauthorizedError
				} = useCatchErrors();

				catchInternalServerError(
					ctx.response?.status,
					ctx.error.message,
					() => {
						router.push({ name: AppRoutes.InternalServerError });
					}
				);

				catchNotFoundError(ctx.response?.status, ctx.data?.message, () => {
					resetAuthState();
					router.push({ name: AppRoutes.NotFound });
				});

				catchUnauthorizedError(ctx.response?.status, ctx.data?.message, () => {
					resetAuthState();
					router.push({ name: AppRoutes.Login });
				});

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
