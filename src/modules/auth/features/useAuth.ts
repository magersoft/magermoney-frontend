import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';
import { useAuthStore } from '@/modules/auth/infrastructure/stores';
import { useCalculations } from '@/modules/calculations';
import { useCurrencies } from '@/modules/currencies';
import { useUser } from '@/modules/users';

export function useAuth() {
	const { user, isAuthorization, resetAuthState } = useAuthStore();
	const { resetUser } = useUser();
	const { restoreCurrenciesStore } = useCurrencies();
	const { restoreCalculationsStore } = useCalculations();

	const router = useRouter();

	const logout = () => {
		resetAuthState();
		resetUser();
		restoreCurrenciesStore();
		restoreCalculationsStore();
		router.push({ name: AppRoutes.Login });
	};

	return {
		user,
		isAuthorization,
		resetAuthState,
		logout
	};
}
