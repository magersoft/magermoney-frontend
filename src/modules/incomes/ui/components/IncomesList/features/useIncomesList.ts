import { useI18n } from 'vue-i18n';

import { NIncomes } from '@/modules/incomes/domain';
import {
	useFetchIncomesService,
	useRemoveIncomeService
} from '@/modules/incomes/infrastructure/services';
import { useIncomesStore } from '@/modules/incomes/infrastructure/stores';
import { usePagination } from '@/shared/features';
import { groupArrayByMonthYear } from '@/shared/utils';

export function useIncomesList() {
	const { page, pageSize, setPage } = usePagination();
	const { incomes, isLoading } = useIncomesStore();
	const { fetchIncomes, fetchIncomesPaginated } = useFetchIncomesService({
		firstPage: 2,
		page,
		setPage
	});
	const { removeIncome } = useRemoveIncomeService();

	const { t, locale } = useI18n();

	const isFinished = ref(false);
	const isRefreshLoading = ref(false);

	const groupedIncomes = computed(() =>
		groupArrayByMonthYear(unref(incomes), 'dateOfIssue', unref(locale))
	);

	const initialFetchData = async () => {
		await fetchIncomes({ force: true }, { perPage: unref(pageSize) });
	};

	const handleRefresh = async () => {
		isRefreshLoading.value = true;

		await fetchIncomes({ force: true, quite: true });

		isRefreshLoading.value = false;
		isFinished.value = false;
	};

	const handleLoadMore = async () => {
		const response = await fetchIncomesPaginated({
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

	const handleRemove = async (income: NIncomes.IIncome) => {
		const isRemovedSuccess = await removeIncome(
			`${t('incomesView.income').toLowerCase()} «${income.title}»`,
			income.id
		);

		if (isRemovedSuccess) {
			await handleRefresh();
		}
	};

	return {
		groupedIncomes,
		isLoading,
		isFinished,
		isRefreshLoading,
		initialFetchData,
		handleLoadMore,
		handleRefresh,
		handleRemove
	};
}
