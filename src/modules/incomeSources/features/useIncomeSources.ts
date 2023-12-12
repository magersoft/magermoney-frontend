import { useFetchIncomeSourcesService } from '@/modules/incomeSources/infrastructure/services';
import { useIncomeSourcesStore } from '@/modules/incomeSources/infrastructure/stores';

export function useIncomeSources() {
	const { incomeSources, isLoading } = useIncomeSourcesStore();
	const { fetchIncomeSources } = useFetchIncomeSourcesService();

	return {
		incomeSources,
		isLoading,
		fetchIncomeSources
	};
}
