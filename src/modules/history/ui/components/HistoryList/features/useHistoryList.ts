import { useI18n } from 'vue-i18n';

import { useHistory } from '@/modules/history/features';
import { groupArrayByMonthYear } from '@/shared/utils';

interface UseHistoryListParams {
	savedFundId?: number;
}

export function useHistoryList({ savedFundId }: UseHistoryListParams = {}) {
	const {
		historyItems,
		isLoading,
		isFinished,
		page,
		pageSize,
		fetchHistory,
		fetchHistoryPaginated
	} = useHistory();

	const { locale } = useI18n();

	const isRefreshLoading = ref(false);

	const groupedHistory = computed(() =>
		groupArrayByMonthYear(unref(historyItems), 'dateOfIssue', unref(locale))
	);

	const initialFetchData = async () => {
		await fetchHistory(
			{ force: true },
			savedFundId
				? { perPage: unref(pageSize), savedFundId }
				: { perPage: unref(pageSize) }
		);
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
		initialFetchData,
		handleRefresh,
		handleLoadMore
	};
}
