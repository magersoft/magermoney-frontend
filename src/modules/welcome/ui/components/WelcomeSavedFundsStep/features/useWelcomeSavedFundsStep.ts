import { useFetchSavedFundsService } from '@/modules/savedFunds/infrastructure/services';

export function useWelcomeSavedFundsStep() {
	const { fetchSavedFunds } = useFetchSavedFundsService();

	const isLoading = ref(false);

	const onRefresh = async () => {
		isLoading.value = true;

		await fetchSavedFunds({ force: true, quite: true });

		isLoading.value = false;
	};

	return {
		isLoading,
		onRefresh
	};
}
