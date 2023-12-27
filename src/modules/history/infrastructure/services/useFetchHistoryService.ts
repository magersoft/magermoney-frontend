import { useHistoryModel } from '@/modules/history/infrastructure/models';
import { useHistoryStore } from '@/modules/history/infrastructure/stores';
import { useBaseFetchPaginated } from '@/shared/infrastructure/services';

export function useFetchHistoryService() {
	const {
		history,
		page,
		pageSize,
		setHistory,
		setIsLoading,
		setIsFinished,
		setPage,
		setError
	} = useHistoryStore();
	const { findAll } = useHistoryModel();

	const {
		fetchBaseList: fetchHistory,
		fetchBasePaginated: fetchHistoryPaginated
	} = useBaseFetchPaginated({
		fetchData: findAll,
		setData: setHistory,
		dataList: history,
		setIsLoading,
		setIsFinished,
		setError,
		setPage,
		page,
		pageSize
	});

	return {
		fetchHistory,
		fetchHistoryPaginated
	};
}
