import {
	useCreateExpenseService,
	useFetchExpensesService,
	useRemoveExpenseService
} from '@/modules/expenses/infrastructure/services';
import { useExpensesStore } from '@/modules/expenses/infrastructure/stores';
import { mappingExpensesItems } from '@/modules/expenses/utils';

export function useExpenses() {
	const { expenses, page, pageSize, isLoading, isFinished, error } =
		useExpensesStore();

	const { fetchExpenses, fetchExpensesPaginated } = useFetchExpensesService();
	const { createExpense } = useCreateExpenseService();
	const { removeExpense } = useRemoveExpenseService();

	const expensesItems = computed(() => mappingExpensesItems(unref(expenses)));

	return {
		expenses,
		expensesItems,
		page,
		pageSize,
		isLoading,
		isFinished,
		error,

		fetchExpenses,
		fetchExpensesPaginated,
		createExpense,
		removeExpense
	};
}
