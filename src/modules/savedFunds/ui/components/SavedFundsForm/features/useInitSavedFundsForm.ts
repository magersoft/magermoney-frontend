import { useCurrencies } from '@/modules/currencies';
import { useFetchSavedFundsService } from '@/modules/savedFunds/infrastructure/services';

export function useInitSavedFundsForm() {
	const { fetchSavedFunds } = useFetchSavedFundsService();
	const { fetchCurrencies } = useCurrencies();

	const fetchData = async () => {
		await Promise.all([
			fetchSavedFunds({ showError: true }),
			fetchCurrencies({ showError: true })
		]);
	};

	fetchData();
}
