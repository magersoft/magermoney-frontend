import { useExpensesModel } from '@/modules/expenses/infrastructure/models';
import { useExpensesStore } from '@/modules/expenses/infrastructure/stores';
import { useBaseFetchPaginated } from '@/shared/infrastructure/services';
import { BaseFetchPaginatedServiceParams } from '@/shared/types/services';

export function useFetchExpensesService(
	pagination: BaseFetchPaginatedServiceParams
) {
	const { expenses, setExpenses, setIsLoading, setError } = useExpensesStore();
	const { fetchAll } = useExpensesModel();

	const {
		fetchBaseList: fetchExpenses,
		fetchBasePaginated: fetchExpensesPaginated
	} = useBaseFetchPaginated({
		fetchData: fetchAll,
		setData: setExpenses,
		dataList: expenses,
		setIsLoading,
		setError,
		...pagination
	});

	return {
		fetchExpenses,
		fetchExpensesPaginated
	};
}
