import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { useAuthStore } from '@/modules/auth/infrastructure/stores';

export function useAuth() {
	const { user, isAuthorization, resetAuthState } = useAuthStore();

	const router = useRouter();

	const logout = () => {
		resetAuthState();
		router.push({ name: AppRoutes.Login });
	};

	return {
		user,
		isAuthorization,
		resetAuthState,
		logout
	};
}
