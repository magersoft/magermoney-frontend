import { useRouter } from 'vue-router';

import { AppRoutes } from '@/app/router/constants';

export function useMonthlyBudgetWidget() {
	const router = useRouter();

	const handleNavigateToMonthlyBudget = () => {
		router.push({ name: AppRoutes.MonthlyBudget });
	};

	return {
		handleNavigateToMonthlyBudget
	};
}
