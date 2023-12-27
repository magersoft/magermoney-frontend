import { useExpensesModel } from '@/modules/expenses/infrastructure/models';
import { useExpensesStore } from '@/modules/expenses/infrastructure/stores';
import { useBaseFetchPaginated } from '@/shared/infrastructure/services';

export function useFetchExpensesService() {
	const {
		expenses,
		setExpenses,
		setIsLoading,
		setIsFinished,
		setPage,
		page,
		pageSize,
		setError
	} = useExpensesStore();
	const { fetchAll } = useExpensesModel();

	const {
		fetchBaseList: fetchExpenses,
		fetchBasePaginated: fetchExpensesPaginated
	} = useBaseFetchPaginated({
		fetchData: fetchAll,
		setData: setExpenses,
		dataList: expenses,
		setIsLoading,
		setIsFinished,
		setError,
		setPage,
		page,
		pageSize
	});

	return {
		fetchExpenses,
		fetchExpensesPaginated
	};
}
