import { useI18n } from 'vue-i18n';

import { useIncomes } from '@/modules/incomes';
import { NIncomes } from '@/modules/incomes/domain';
import { groupArrayByMonthYear } from '@/shared/utils';

export function useIncomesList() {
	const {
		incomes,
		page,
		pageSize,
		isLoading,
		isFinished,
		fetchIncomes,
		fetchIncomesPaginated,
		removeIncome
	} = useIncomes();

	const { t, locale } = useI18n();

	const isRefreshLoading = ref(false);

	const groupedIncomes = computed(() =>
		groupArrayByMonthYear(unref(incomes), 'dateOfIssue', unref(locale))
	);

	const initialFetchData = async () => {
		await fetchIncomes({ force: true }, { perPage: unref(pageSize) });
	};

	const handleRefresh = async () => {
		isRefreshLoading.value = true;

		await fetchIncomes(
			{ force: true, quite: true },
			{ perPage: unref(pageSize) }
		);

		isRefreshLoading.value = false;
	};

	const handleLoadMore = async () => {
		await fetchIncomesPaginated({
			page: unref(page),
			perPage: unref(pageSize)
		});
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
