import { useCategories } from '@/modules/categories';
import { useCurrencies } from '@/modules/currencies';
import { useExpenseSources } from '@/modules/expenseSources';

export function useInitExpenseSourcesForm() {
	const { fetchExpenseSources } = useExpenseSources();
	const { fetchCurrencies } = useCurrencies();
	const { fetchExpenseCategories } = useCategories();

	const fetchData = async () => {
		await Promise.all([
			fetchExpenseSources(),
			fetchCurrencies(),
			fetchExpenseCategories()
		]);
	};

	fetchData();
}
