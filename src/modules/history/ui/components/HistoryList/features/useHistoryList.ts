import { useFetchHistoryService } from '@/modules/history/infrastructure/services';
import { useHistoryStore } from '@/modules/history/infrastructure/stores';
import { usePagination } from '@/shared/features';

export function useHistoryList() {
	const { page, pageSize, setPage } = usePagination();
	const { fetchHistory } = useFetchHistoryService({
		firstPage: 2,
		page,
		setPage
	});

	const { history } = useHistoryStore();

	const initialFetchData = async () => {
		await fetchHistory({ force: true }, { perPage: unref(pageSize) });
	};

	return {
		history,
		initialFetchData
	};
}
