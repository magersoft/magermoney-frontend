import { useI18n } from 'vue-i18n';

import { useCalculations } from '@/modules/calculations';
import { useExpenses } from '@/modules/expenses';
import { NExpenses } from '@/modules/expenses/domain';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';
import { groupArrayByMonthYear } from '@/shared/utils';

export function useExpensesList() {
	const {
		expensesItems,
		page,
		pageSize,
		isLoading,
		isFinished,
		fetchExpenses,
		fetchExpensesPaginated,
		removeExpense
	} = useExpenses();
	const { fetchTotalExpenses, fetchSummaryExpensesByCategories } =
		useCalculations();

	const { currency } = useSettingsStore();

	const { t, locale } = useI18n();

	const isRefreshLoading = ref(false);

	const groupedExpenses = computed(() =>
		groupArrayByMonthYear(unref(expensesItems), 'dateOfIssue', unref(locale))
	);

	const initialFetchData = async () => {
		await fetchExpenses({ force: true }, { perPage: unref(pageSize) });
	};

	const handleRefresh = async () => {
		isRefreshLoading.value = true;

		await fetchTotalExpenses({ force: true }, { currency: unref(currency) });
		await fetchSummaryExpensesByCategories(
			{ force: true },
			{ currency: unref(currency) }
		);
		await fetchExpenses(
			{ force: true, quite: true },
			{ perPage: unref(pageSize) }
		);

		isRefreshLoading.value = false;
	};

	const handleLoadMore = async () => {
		await fetchExpensesPaginated({
			page: unref(page),
			perPage: unref(pageSize)
		});
	};

	const handleRemove = async (expense: NExpenses.IExpense) => {
		const isRemovedSuccess = await removeExpense(
			`${t('expensesView.expense').toLowerCase()} «${expense.category.name}»`,
			expense.id
		);

		if (isRemovedSuccess) {
			await handleRefresh();
		}
	};

	return {
		groupedExpenses,
		isLoading,
		isFinished,
		isRefreshLoading,
		initialFetchData,
		handleLoadMore,
		handleRefresh,
		handleRemove
	};
}
