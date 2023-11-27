import { useFetchAccumulatedFundsService } from '@/modules/accumulatedFunds/infrastructure/services';

export function useWelcomeAccumulatedFundsStep() {
	const { fetchAccumulatedFunds } = useFetchAccumulatedFundsService();

	const isLoading = ref(false);

	const onRefresh = async () => {
		isLoading.value = true;

		await fetchAccumulatedFunds({ force: true, quite: true });

		isLoading.value = false;
	};

	return {
		isLoading,
		onRefresh
	};
}
