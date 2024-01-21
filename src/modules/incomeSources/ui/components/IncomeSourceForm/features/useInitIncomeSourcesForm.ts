import { useCategories } from '@/modules/categories';
import { useCurrencies } from '@/modules/currencies';
import { useIncomeSources } from '@/modules/incomeSources';

export function useInitIncomeSourcesForm() {
	const { fetchIncomeSources } = useIncomeSources();
	const { fetchCurrencies } = useCurrencies();
	const { fetchIncomeCategories } = useCategories();

	const fetchData = async () => {
		await Promise.all([
			fetchIncomeSources(),
			fetchCurrencies(),
			fetchIncomeCategories()
		]);
	};

	fetchData();
}
