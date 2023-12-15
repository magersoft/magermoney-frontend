import { useCurrencies } from '@/modules/currencies';
import { useExpenseSources } from '@/modules/expenseSources/features/useExpenseSources.ts';
import { useSavedFunds } from '@/modules/savedFunds';

export function useInitAddExpenseForm() {
	const { fetchExpenseSources } = useExpenseSources();
	const { fetchSavedFunds } = useSavedFunds();
	const { fetchCurrencies } = useCurrencies();

	const fetchData = async () => {
		await Promise.all([
			fetchExpenseSources(),
			fetchSavedFunds(),
			fetchCurrencies()
		]);
	};

	fetchData();
}
