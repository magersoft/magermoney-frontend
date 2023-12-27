import { useIncomesModel } from '@/modules/incomes/infrastructure/models';
import { useIncomesStore } from '@/modules/incomes/infrastructure/stores';
import { useBaseFetchPaginated } from '@/shared/infrastructure/services';

export function useFetchIncomesService() {
	const {
		incomes,
		page,
		pageSize,
		setIncomes,
		setIsLoading,
		setIsFinished,
		setPage,
		setError
	} = useIncomesStore();
	const { fetchAll } = useIncomesModel();

	const {
		fetchBaseList: fetchIncomes,
		fetchBasePaginated: fetchIncomesPaginated
	} = useBaseFetchPaginated({
		fetchData: fetchAll,
		setData: setIncomes,
		dataList: incomes,
		setIsLoading,
		setIsFinished,
		setError,
		setPage,
		page,
		pageSize
	});

	return {
		fetchIncomes,
		fetchIncomesPaginated
	};
}
