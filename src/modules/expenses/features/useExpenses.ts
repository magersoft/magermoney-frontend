import {
	useCreateExpenseService,
	useFetchExpensesService,
	useRemoveExpenseService
} from '@/modules/expenses/infrastructure/services';
import { useExpensesStore } from '@/modules/expenses/infrastructure/stores';

export function useExpenses() {
	const { expenses, page, pageSize, isLoading, isFinished, error } =
		useExpensesStore();

	const { fetchExpenses, fetchExpensesPaginated } = useFetchExpensesService();
	const { createExpense } = useCreateExpenseService();
	const { removeExpense } = useRemoveExpenseService();

	return {
		expenses,
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
