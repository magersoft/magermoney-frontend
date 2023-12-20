import { useI18n } from 'vue-i18n';

import { NExpenses } from '@/modules/expenses/domain';
import {
	useFetchExpensesService,
	useRemoveExpenseService
} from '@/modules/expenses/infrastructure/services';
import { useExpensesStore } from '@/modules/expenses/infrastructure/stores';
import { usePagination } from '@/shared/features';
import { groupArrayByMonthYear } from '@/shared/utils';

export function useExpensesList() {
	const { page, pageSize, setPage } = usePagination();
	const { expenses, isLoading } = useExpensesStore();
	const { fetchExpenses, fetchExpensesPaginated } = useFetchExpensesService({
		firstPage: 2,
		page,
		setPage
	});
	const { removeExpense } = useRemoveExpenseService();

	const { t, locale } = useI18n();

	const isFinished = ref(false);
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
		isFinished.value = false;
	};

	const handleLoadMore = async () => {
		const response = await fetchExpensesPaginated({
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
