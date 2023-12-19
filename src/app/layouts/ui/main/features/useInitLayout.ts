import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { useAuth } from '@/modules/auth';
import { useUser } from '@/modules/users';

export function useInitLayout() {
	const { user, isAuthorization } = useAuth();
	const { fetchUser, user: authorizedUser } = useUser();
	const router = useRouter();

	const fetchData = async () => {
		if (unref(isAuthorization)) {
			await Promise.all([fetchUser({ showError: true }, unref(user)!.id)]);

			if (unref(authorizedUser)?.isFirstTime) {
				router.push({ name: AppRoutes.Welcome });
			}
		}
	};

	fetchData();
}
