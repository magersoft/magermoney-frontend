import { useCurrencies } from '@/modules/currencies';
import { useFetchIncomeSourcesService } from '@/modules/incomeSources/infrastructure/services';

export function useInitIncomeSourcesForm() {
	const { fetchIncomeSources } = useFetchIncomeSourcesService();
	const { fetchCurrencies } = useCurrencies();

	const fetchData = async () => {
		await Promise.all([
			fetchIncomeSources({ showError: true }),
			fetchCurrencies({ showError: true })
		]);
	};

	fetchData();
}
