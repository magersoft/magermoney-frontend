import { RouterContext } from '@/router/types';

import { useAuthStore } from '../stores';

export default async function auth({ next }: RouterContext) {
	const { isAuthorization } = useAuthStore();

	if (!unref(isAuthorization)) {
		return next({
			name: 'Login'
		});
	}

	return next();
}
