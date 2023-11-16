import { AppRoutes } from '@/app/router/constants';
import { RouterContext } from '@/app/router/types';
import { useUser } from '@/modules/user';

export default async function welcome({ next }: RouterContext) {
	const { user } = useUser();

	if (unref(user)?.isFirstTime) {
		return next({
			name: AppRoutes.Welcome
		});
	}

	return next();
}
