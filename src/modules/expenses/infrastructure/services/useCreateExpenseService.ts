import { useExpensesModel } from '@/modules/expenses/infrastructure/models';
import { useExpensesStore } from '@/modules/expenses/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useCreateExpenseService() {
	const { setExpense, setIsLoading, setError } = useExpensesStore();
	const { create } = useExpensesModel();

	const { fetchBase: createExpense } = useBaseFetch({
		fetchData: create,
		setData: setExpense,
		setIsLoading,
		setError
	});

	return {
		createExpense
	};
}
