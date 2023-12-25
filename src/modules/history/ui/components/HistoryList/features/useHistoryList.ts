import { useI18n } from 'vue-i18n';

import { useFetchHistoryService } from '@/modules/history/infrastructure/services';
import { useHistoryStore } from '@/modules/history/infrastructure/stores';
import { usePagination } from '@/shared/features';
import { groupArrayByMonthYear } from '@/shared/utils';

export function useHistoryList() {
	const { page, pageSize, setPage } = usePagination();
	const { fetchHistory, fetchHistoryPaginated } = useFetchHistoryService({
		firstPage: 2,
		page,
		setPage
	});

	const { history, isLoading } = useHistoryStore();

	const { locale } = useI18n();

	const isFinished = ref(false);
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
		isFinished.value = false;
	};

	const handleLoadMore = async () => {
		const response = await fetchHistoryPaginated({
			page: unref(page),
			perPage: unref(pageSize)
		});

		if (!response) {
			isFinished.value = true;
			return;
		}

		isFinished.value =
			!unref(response.data) || unref(response.data)!.length === 0;
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
