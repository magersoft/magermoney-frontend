import { RouterContext } from '@/router/types';

import { useAuthStore } from '../stores';

export default async function login({ next }: RouterContext) {
	const { isAuthorization } = useAuthStore();

	if (unref(isAuthorization)) {
		return next({
			name: 'Dashboard'
		});
	}

	return next();
}
