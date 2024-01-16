import { useFetchHistoryService } from '@/modules/history/infrastructure/services';
import { useHistoryStore } from '@/modules/history/infrastructure/stores';

export function useHistory() {
	const { history, isLoading, isFinished, page, pageSize, restoreStore } =
		useHistoryStore();
	const { fetchHistory, fetchHistoryPaginated } = useFetchHistoryService();

	const resetHistory = () => {
		restoreStore();
	};

	return {
		history,
		page,
		pageSize,
		isLoading,
		isFinished,

		fetchHistory,
		fetchHistoryPaginated,

		resetHistory
	};
}
