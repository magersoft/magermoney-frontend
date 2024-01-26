import { useCalculationsModel } from '@/modules/calculations/infrastructure/models';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchSummaryExpensesByCategoriesService() {
	const { setSummaryExpensesByCategories, setIsLoading, setError } =
		useCalculationsStore();
	const { fetchSummaryExpensesByCategories: fetchData } =
		useCalculationsModel();

	const { fetchBase: fetchSummaryExpensesByCategories } = useBaseFetch({
		fetchData,
		setData: setSummaryExpensesByCategories,
		setIsLoading,
		setError
	});

	return {
		fetchSummaryExpensesByCategories
	};
}
