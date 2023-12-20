import { useIncomesModel } from '@/modules/incomes/infrastructure/models';
import { useIncomesStore } from '@/modules/incomes/infrastructure/stores';
import { useBaseFetchPaginated } from '@/shared/infrastructure/services';
import { BaseFetchPaginatedParams } from '@/shared/types/services';

export function useFetchIncomesService(
	pagination: Pick<
		BaseFetchPaginatedParams<any, any>,
		'page' | 'pageSize' | 'firstPage' | 'setPage'
	>
) {
	const { incomes, setIncomes, setIsLoading, setError } = useIncomesStore();
	const { fetchAll } = useIncomesModel();

	const {
		fetchBaseList: fetchIncomes,
		fetchBasePaginated: fetchIncomesPaginated
	} = useBaseFetchPaginated({
		fetchData: fetchAll,
		setData: setIncomes,
		dataList: incomes,
		setIsLoading,
		setError,
		...pagination
	});

	return {
		fetchIncomes,
		fetchIncomesPaginated
	};
}
