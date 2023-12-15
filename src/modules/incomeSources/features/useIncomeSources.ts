import { useFetchIncomeSourcesService } from '@/modules/incomeSources/infrastructure/services';
import { useIncomeSourcesStore } from '@/modules/incomeSources/infrastructure/stores';
import { mappingIncomeSourcesForPicker } from '@/modules/incomeSources/utils';

export function useIncomeSources() {
	const { incomeSources, isLoading } = useIncomeSourcesStore();
	const { fetchIncomeSources } = useFetchIncomeSourcesService();

	const incomeSourcesItems = computed(() =>
		mappingIncomeSourcesForPicker(unref(incomeSources))
	);

	return {
		incomeSources,
		incomeSourcesItems,
		isLoading,
		fetchIncomeSources
	};
}
