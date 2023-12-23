import { useHistoryModel } from '@/modules/history/infrastructure/models';
import { useHistoryStore } from '@/modules/history/infrastructure/stores';
import { useBaseFetchPaginated } from '@/shared/infrastructure/services';
import { BaseFetchPaginatedServiceParams } from '@/shared/types/services';

export function useFetchHistoryService(
	pagination: BaseFetchPaginatedServiceParams
) {
	const { history, setHistory, setIsLoading, setError } = useHistoryStore();
	const { findAll } = useHistoryModel();

	const {
		fetchBaseList: fetchHistory,
		fetchBasePaginated: fetchHistoryPaginated
	} = useBaseFetchPaginated({
		fetchData: findAll,
		setData: setHistory,
		dataList: history,
		setIsLoading,
		setError,
		...pagination
	});

	return {
		fetchHistory,
		fetchHistoryPaginated
	};
}
