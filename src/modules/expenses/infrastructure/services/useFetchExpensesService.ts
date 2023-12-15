import { useExpensesModel } from '@/modules/expenses/infrastructure/models';
import { useExpensesStore } from '@/modules/expenses/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useFetchExpensesService() {
	const { setExpenses, setIsLoading, setError } = useExpensesStore();
	const { fetchAll } = useExpensesModel();

	const { fetchBase: fetchExpenses } = useBaseFetch({
		fetchData: fetchAll,
		setData: setExpenses,
		setIsLoading,
		setError
	});

	return {
		fetchExpenses
	};
}
