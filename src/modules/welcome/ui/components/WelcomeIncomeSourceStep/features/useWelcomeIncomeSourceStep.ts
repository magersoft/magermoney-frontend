import { useFetchIncomeSourcesService } from '@/modules/incomeSource/infrastructure/services';

export function useWelcomeIncomeSourceStep() {
	const { fetchIncomeSources } = useFetchIncomeSourcesService();

	const isLoading = ref(false);

	const onRefresh = async () => {
		isLoading.value = true;

		await fetchIncomeSources({ force: true, quite: true });

		isLoading.value = false;
	};

	return {
		isLoading,
		onRefresh
	};
}
