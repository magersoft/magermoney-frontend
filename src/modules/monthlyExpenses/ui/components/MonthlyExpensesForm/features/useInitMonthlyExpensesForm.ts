import { useCurrencies } from '@/modules/currencies';
import { useFetchMonthlyExpensesService } from '@/modules/monthlyExpenses/infrastructure/services';

export function useInitMonthlyExpensesForm() {
	const { fetchMonthlyExpenses } = useFetchMonthlyExpensesService();
	const { fetchCurrencies } = useCurrencies();

	const fetchData = async () => {
		await Promise.all([
			fetchMonthlyExpenses({ showError: true }),
			fetchCurrencies({ showError: true })
		]);
	};

	fetchData();
}
