import { useUser } from '@/app/user';
import { AppRoutes } from '@/router/constants';
import { RouterContext } from '@/router/types';

export default async function welcome({ next }: RouterContext) {
	const { user } = useUser();

	if (unref(user)?.isFirstTime) {
		return next({
			name: AppRoutes.Welcome
		});
	}

	return next();
}
