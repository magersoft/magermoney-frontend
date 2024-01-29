import { useI18n } from 'vue-i18n';

import { useCalculations } from '@/modules/calculations';
import { useIncomes } from '@/modules/incomes';
import { NIncomes } from '@/modules/incomes/domain';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';
import { groupArrayByMonthYear } from '@/shared/utils';

export function useIncomesList() {
	const {
		incomesItems,
		page,
		pageSize,
		isLoading,
		isFinished,
		fetchIncomes,
		fetchIncomesPaginated,
		removeIncome
	} = useIncomes();

	const { fetchTotalIncomes, fetchSummaryIncomesByCategories } =
		useCalculations();

	const { currency } = useSettingsStore();

	const { t, locale } = useI18n();

	const isRefreshLoading = ref(false);

	const groupedIncomes = computed(() =>
		groupArrayByMonthYear(unref(incomesItems), 'dateOfIssue', unref(locale))
	);

	const initialFetchData = async () => {
		await fetchIncomes({ force: true }, { perPage: unref(pageSize) });
	};

	const handleRefresh = async () => {
		isRefreshLoading.value = true;

		await fetchTotalIncomes({ force: true }, { currency: unref(currency) });
		await fetchSummaryIncomesByCategories(
			{ force: true },
			{ currency: unref(currency) }
		);
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
			`${t('incomesView.income').toLowerCase()} «${income.category.name}»`,
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
