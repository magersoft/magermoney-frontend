import { useExpensesModel } from '@/modules/expenses/infrastructure/models';
import { useExpensesStore } from '@/modules/expenses/infrastructure/stores';
import { useBaseFetchPaginated } from '@/shared/infrastructure/services';
import { BaseFetchPaginatedParams } from '@/shared/types/services';

export function useFetchExpensesService(
	pagination: Pick<
		BaseFetchPaginatedParams<any, any>,
		'page' | 'pageSize' | 'firstPage' | 'setPage'
	>
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
