import { useCategories } from '@/modules/categories';
import { useCurrencies } from '@/modules/currencies';
import { useSavedFunds } from '@/modules/savedFunds';

export function useInitSavedFundsForm() {
	const { fetchSavedFunds } = useSavedFunds();
	const { fetchCurrencies } = useCurrencies();
	const { fetchCategories } = useCategories();

	const fetchData = async () => {
		await Promise.all([
			fetchSavedFunds({ showError: true }),
			fetchCurrencies({ showError: true }),
			fetchCategories({ showError: true })
		]);
	};

	fetchData();
}
