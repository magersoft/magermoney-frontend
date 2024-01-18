import { useFetchHistoryService } from '@/modules/history/infrastructure/services';
import { useHistoryStore } from '@/modules/history/infrastructure/stores';
import { mappingHistoryItems } from '@/modules/history/utils/mappingHistoryItems.ts';

export function useHistory() {
	const { history, isLoading, isFinished, page, pageSize, restoreStore } =
		useHistoryStore();
	const { fetchHistory, fetchHistoryPaginated } = useFetchHistoryService();

	const historyItems = computed(() => mappingHistoryItems(unref(history)));

	const resetHistory = () => {
		restoreStore();
	};

	return {
		history,
		historyItems,
		page,
		pageSize,
		isLoading,
		isFinished,

		fetchHistory,
		fetchHistoryPaginated,

		resetHistory
	};
}
