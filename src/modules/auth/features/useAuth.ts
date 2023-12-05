import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { useAuthStore } from '@/modules/auth/infrastructure/stores';
import { useUser } from '@/modules/users';

export function useAuth() {
	const { user, isAuthorization, resetAuthState } = useAuthStore();
	const { resetUser } = useUser();

	const router = useRouter();

	const logout = () => {
		resetAuthState();
		resetUser();
		router.push({ name: AppRoutes.Login });
	};

	return {
		user,
		isAuthorization,
		resetAuthState,
		logout
	};
}
