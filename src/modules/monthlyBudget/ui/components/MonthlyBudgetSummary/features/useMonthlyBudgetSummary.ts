import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';

export function useMonthlyBudgetSummary() {
	const router = useRouter();

	const handleNavigateToAccumulationFunds = () => {
		router.push({ name: AppRoutes.AccumulationFunds });
	};

	return {
		handleNavigateToAccumulationFunds
	};
}
