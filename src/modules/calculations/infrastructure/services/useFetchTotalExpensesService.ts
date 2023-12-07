import { useCalculationsModel } from '@/modules/calculations/infrastructure/models';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchTotalExpensesService() {
	const { setTotalExpenses, setIsLoading, setError } = useCalculationsStore();
	const { fetchTotalExpenses: fetchExpenses } = useCalculationsModel();

	const { fetchBase: fetchTotalExpenses } = useBaseFetch({
		fetchData: fetchExpenses,
		setData: setTotalExpenses,
		setIsLoading,
		setError
	});

	return {
		fetchTotalExpenses
	};
}
