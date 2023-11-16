import { AppRoutes } from '@/app/router/constants';
import { RouterContext } from '@/app/router/types';

import { useAuthStore } from '../stores';

export default async function auth({ next }: RouterContext) {
	const { isAuthorization } = useAuthStore();

	if (!unref(isAuthorization)) {
		return next({
			name: AppRoutes.Login
		});
	}

	return next();
}
