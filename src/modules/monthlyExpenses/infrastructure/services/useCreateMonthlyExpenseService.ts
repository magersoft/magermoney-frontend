import { useMonthlyExpensesModel } from '@/modules/monthlyExpenses/infrastructure/models';
import { useMonthlyExpensesStore } from '@/modules/monthlyExpenses/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export function useCreateMonthlyExpenseService() {
	const { setMonthlyExpense, setIsLoading, setError } =
		useMonthlyExpensesStore();
	const { create } = useMonthlyExpensesModel();

	const { fetchBase: createMonthlyExpense } = useBaseFetch({
		fetchData: create,
		setData: setMonthlyExpense,
		setIsLoading,
		setError
	});

	return {
		createMonthlyExpense
	};
}
