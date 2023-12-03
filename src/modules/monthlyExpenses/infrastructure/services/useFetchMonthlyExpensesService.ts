import { useMonthlyExpensesModel } from '@/modules/monthlyExpenses/infrastructure/models';
import { useMonthlyExpensesStore } from '@/modules/monthlyExpenses/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchMonthlyExpensesService() {
	const {
		monthlyExpenses,
		hasMonthlyExpenses,
		isLoading,
		setMonthlyExpenses,
		setIsLoading,
		setError
	} = useMonthlyExpensesStore();
	const { fetchAll } = useMonthlyExpensesModel();

	const { fetchBaseList: fetchMonthlyExpenses } = useBaseFetchList({
		fetchData: fetchAll,
		setData: setMonthlyExpenses,
		dataList: monthlyExpenses,
		setIsLoading,
		setError
	});

	return {
		monthlyExpenses,
		hasMonthlyExpenses,
		isLoading,
		fetchMonthlyExpenses
	};
}
