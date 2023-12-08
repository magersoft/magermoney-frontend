import { useFetchExpenseSourcesService } from '@/modules/expenseSources/infrastructure/services';

export function useWelcomeExpenseSourcesStep() {
	const { fetchExpenseSources } = useFetchExpenseSourcesService();

	const isLoading = ref(false);

	const onRefresh = async () => {
		isLoading.value = true;

		await fetchExpenseSources({ force: true, quite: true });

		isLoading.value = false;
	};

	return {
		isLoading,
		onRefresh
	};
}
