import { useCategories } from '@/modules/categories';
import { useCurrencies } from '@/modules/currencies';
import { useIncomeSources } from '@/modules/incomeSources';

export function useInitIncomeSourcesForm() {
	const { fetchIncomeSources } = useIncomeSources();
	const { fetchCurrencies } = useCurrencies();
	const { fetchCategories } = useCategories();

	const fetchData = async () => {
		await Promise.all([
			fetchIncomeSources({ showError: true }),
			fetchCurrencies({ showError: true }),
			fetchCategories({ showError: true })
		]);
	};

	fetchData();
}
