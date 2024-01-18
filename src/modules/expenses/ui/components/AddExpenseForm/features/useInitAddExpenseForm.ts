import { useCategories } from '@/modules/categories';
import { useCurrencies } from '@/modules/currencies';
import { useExpenseSources } from '@/modules/expenseSources/features/useExpenseSources.ts';
import { useSavedFunds } from '@/modules/savedFunds';

export function useInitAddExpenseForm() {
	const { fetchExpenseSources } = useExpenseSources();
	const { fetchSavedFunds } = useSavedFunds();
	const { fetchCurrencies } = useCurrencies();
	const { fetchCategories } = useCategories();

	const fetchData = async () => {
		await Promise.all([
			fetchExpenseSources(),
			fetchSavedFunds(),
			fetchCurrencies(),
			fetchCategories()
		]);
	};

	fetchData();
}
