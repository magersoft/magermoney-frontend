import { useCalculationsModel } from '@/modules/calculations/infrastructure/models';
import { useCalculationsStore } from '@/modules/calculations/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchTotalExpensesService() {
	const { setTotalExpenses, setIsLoading, setError } = useCalculationsStore();
	const { fetchTotalExpenses: fetchData } = useCalculationsModel();

	const { fetchBase: fetchTotalExpenses } = useBaseFetch({
		fetchData,
		setData: setTotalExpenses,
		setIsLoading,
		setError
	});

	return {
		fetchTotalExpenses
	};
}
