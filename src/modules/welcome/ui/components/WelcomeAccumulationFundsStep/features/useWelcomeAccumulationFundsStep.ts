import { useInitAccumulationFunds } from '@/modules/accumulationFunds/features';

export function useWelcomeAccumulationFundsStep() {
	const { fetchInitAccumulationFunds } = useInitAccumulationFunds();

	const isLoading = ref(false);

	const onRefresh = async () => {
		isLoading.value = true;

		await fetchInitAccumulationFunds();

		isLoading.value = false;
	};

	return {
		isLoading,
		onRefresh
	};
}
