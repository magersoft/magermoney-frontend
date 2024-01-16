import { useCurrencies } from '@/modules/currencies';
import { useExpenseSources } from '@/modules/expenseSources';

export function useInitExpenseSourcesForm() {
	const { fetchExpenseSources } = useExpenseSources();
	const { fetchCurrencies } = useCurrencies();

	const fetchData = async () => {
		await Promise.all([
			fetchExpenseSources({ showError: true }),
			fetchCurrencies({ showError: true })
		]);
	};

	fetchData();
}
