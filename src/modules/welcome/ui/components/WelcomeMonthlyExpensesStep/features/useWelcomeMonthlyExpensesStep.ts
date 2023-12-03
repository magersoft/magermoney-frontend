import { useFetchMonthlyExpensesService } from '@/modules/monthlyExpenses/infrastructure/services';

export function useWelcomeMonthlyExpensesStep() {
	const { fetchMonthlyExpenses } = useFetchMonthlyExpensesService();

	const isLoading = ref(false);

	const onRefresh = async () => {
		isLoading.value = true;

		await fetchMonthlyExpenses({ force: true, quite: true });

		isLoading.value = false;
	};

	return {
		isLoading,
		onRefresh
	};
}
