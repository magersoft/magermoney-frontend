import { useRouter } from 'vue-router';

import { useAuth } from '@/app/auth';
import { useUser } from '@/app/user';
import { AppRoutes } from '@/router/constants';

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
