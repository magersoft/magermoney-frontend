import { useRouter } from 'vue-router';

import { useAuthStore } from '@/app/auth/infrastructure/stores';
import { AppRoutes } from '@/router/constants';

export function useLogout() {
	const { resetAuthState } = useAuthStore();
	const router = useRouter();

	const logout = () => {
		resetAuthState();
		router.push({ name: AppRoutes.Login });
	};

	return {
		logout
	};
}
