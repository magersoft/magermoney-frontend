import { useCurrencies } from '@/modules/currencies';
import { useFetchExpenseSourcesService } from '@/modules/expenseSources/infrastructure/services';

export function useInitExpenseSourcesForm() {
	const { fetchExpenseSources } = useFetchExpenseSourcesService();
	const { fetchCurrencies } = useCurrencies();

	const fetchData = async () => {
		await Promise.all([
			fetchExpenseSources({ showError: true }),
			fetchCurrencies({ showError: true })
		]);
	};

	fetchData();
}
