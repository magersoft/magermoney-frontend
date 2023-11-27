import { useFetchAccumulatedFundsService } from '@/modules/accumulatedFunds/infrastructure/services';
import { useCurrencies } from '@/modules/currencies';

export function useInitAccumulatedFundsForm() {
	const { fetchAccumulatedFunds } = useFetchAccumulatedFundsService();
	const { fetchCurrencies } = useCurrencies();

	const fetchData = async () => {
		await Promise.all([
			fetchAccumulatedFunds({ showError: true }),
			fetchCurrencies({ showError: true })
		]);
	};

	fetchData();
}
