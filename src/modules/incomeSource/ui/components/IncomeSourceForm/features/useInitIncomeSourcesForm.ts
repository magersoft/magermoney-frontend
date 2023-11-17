import { useCurrencies } from '@/modules/currency';
import { useFetchIncomeSourcesService } from '@/modules/incomeSource/infrastructure/services';

export function useInitIncomeSourcesForm() {
	const { fetchIncomeSources } = useFetchIncomeSourcesService();
	const { fetchCurrencies } = useCurrencies();

	const fetchData = async () => {
		await Promise.all([fetchIncomeSources(), fetchCurrencies()]);
	};

	fetchData();
}
