import { useCalculationsModel } from '@/modules/calculations/infrastructure/models';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchMonthlyBudgetService() {
	const { setMonthlyBudget, setIsLoading, setError } = useCalculationsStore();
	const { fetchMonthlyBudget: fetchData } = useCalculationsModel();

	const { fetchBase: fetchMonthlyBudget } = useBaseFetch({
		fetchData,
		setData: setMonthlyBudget,
		setIsLoading,
		setError
	});

	return {
		fetchMonthlyBudget
	};
}
