import { useCalculationsModel } from '@/modules/calculations/infrastructure/models';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchTotalMonthlyExpensesService() {
	const { setTotalMonthlyExpenses, setIsLoading, setError } =
		useCalculationsStore();
	const { fetchTotalMonthlyExpenses: fetchData } = useCalculationsModel();

	const { fetchBase: fetchTotalMonthlyExpenses } = useBaseFetch({
		fetchData,
		setData: setTotalMonthlyExpenses,
		setIsLoading,
		setError
	});

	return {
		fetchTotalMonthlyExpenses
	};
}
