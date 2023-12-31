import { useI18n } from 'vue-i18n';

import { NExpenses } from '@/modules/expenses/domain';
import {
	useFetchExpensesService,
	useRemoveExpenseService
} from '@/modules/expenses/infrastructure/services';
import { useExpensesStore } from '@/modules/expenses/infrastructure/stores';
import { groupArrayByMonthYear } from '@/shared/utils';

export function useExpensesList() {
	const { expenses, page, pageSize, isLoading, isFinished } =
		useExpensesStore();
	const { fetchExpenses, fetchExpensesPaginated } = useFetchExpensesService();
	const { removeExpense } = useRemoveExpenseService();

	const { t, locale } = useI18n();

	const isRefreshLoading = ref(false);

	const groupedExpenses = computed(() =>
		groupArrayByMonthYear(unref(expenses), 'dateOfIssue', unref(locale))
	);

	const initialFetchData = async () => {
		await fetchExpenses({ force: true }, { perPage: unref(pageSize) });
	};

	const handleRefresh = async () => {
		isRefreshLoading.value = true;

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
			`${t('expensesView.expense').toLowerCase()} «${expense.title}»`,
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
