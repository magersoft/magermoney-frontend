import {
	useCreateIncomeSourceService,
	useFetchIncomeSourcesService,
	useRemoveIncomeSourceService
} from '@/modules/incomeSources/infrastructure/services';
import { useIncomeSourcesStore } from '@/modules/incomeSources/infrastructure/stores';
import { mappingIncomeSourcesForPicker } from '@/modules/incomeSources/utils';

export function useIncomeSources() {
	const { incomeSources, hasIncomeSources, isLoading, error } =
		useIncomeSourcesStore();

	const { fetchIncomeSources } = useFetchIncomeSourcesService();
	const { createIncomeSource } = useCreateIncomeSourceService();
	const { removeIncomeSource } = useRemoveIncomeSourceService();

	const incomeSourcesItems = computed(() =>
		mappingIncomeSourcesForPicker(unref(incomeSources))
	);

	return {
		incomeSources,
		incomeSourcesItems,
		hasIncomeSources,
		isLoading,
		error,

		fetchIncomeSources,
		createIncomeSource,
		removeIncomeSource
	};
}
