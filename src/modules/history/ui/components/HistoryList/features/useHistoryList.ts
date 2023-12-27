import { useI18n } from 'vue-i18n';

import { useFetchHistoryService } from '@/modules/history/infrastructure/services';
import { useHistoryStore } from '@/modules/history/infrastructure/stores';
import { groupArrayByMonthYear } from '@/shared/utils';

export function useHistoryList() {
	const { history, page, pageSize, isLoading, isFinished } = useHistoryStore();
	const { fetchHistory, fetchHistoryPaginated } = useFetchHistoryService();

	const { locale } = useI18n();

	const isRefreshLoading = ref(false);

	const groupedHistory = computed(() =>
		groupArrayByMonthYear(unref(history), 'dateOfIssue', unref(locale))
	);

	const historyIcons = computed(() => ({
		income: 'down',
		expense: 'down',
		transfer: 'exchange'
	}));

	const initialFetchData = async () => {
		await fetchHistory({ force: true }, { perPage: unref(pageSize) });
	};

	const handleRefresh = async () => {
		isRefreshLoading.value = true;

		await fetchHistory(
			{ force: true, quite: true },
			{ perPage: unref(pageSize) }
		);

		isRefreshLoading.value = false;
	};

	const handleLoadMore = async () => {
		await fetchHistoryPaginated({
			page: unref(page),
			perPage: unref(pageSize)
		});
	};

	return {
		groupedHistory,
		isLoading,
		isFinished,
		isRefreshLoading,
		historyIcons,
		initialFetchData,
		handleRefresh,
		handleLoadMore
	};
}
