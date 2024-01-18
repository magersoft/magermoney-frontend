import { useCategories } from '@/modules/categories';
import { useCurrencies } from '@/modules/currencies';
import { useIncomeSources } from '@/modules/incomeSources';
import { useSavedFunds } from '@/modules/savedFunds';

export function useInitAddIncomeForm() {
	const { fetchIncomeSources } = useIncomeSources();
	const { fetchSavedFunds } = useSavedFunds();
	const { fetchCurrencies } = useCurrencies();
	const { fetchCategories } = useCategories();

	const fetchData = async () => {
		await Promise.all([
			fetchIncomeSources(),
			fetchSavedFunds(),
			fetchCurrencies(),
			fetchCategories()
		]);
	};

	fetchData();
}
