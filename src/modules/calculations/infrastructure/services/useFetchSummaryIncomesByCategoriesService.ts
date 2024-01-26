import { useCalculationsModel } from '@/modules/calculations/infrastructure/models';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchSummaryIncomesByCategoriesService() {
	const { setSummaryIncomesByCategories, setIsLoading, setError } =
		useCalculationsStore();
	const { fetchSummaryIncomesByCategories: fetchData } = useCalculationsModel();

	const { fetchBase: fetchSummaryIncomesByCategories } = useBaseFetch({
		fetchData,
		setData: setSummaryIncomesByCategories,
		setIsLoading,
		setError
	});

	return {
		fetchSummaryIncomesByCategories
	};
}
