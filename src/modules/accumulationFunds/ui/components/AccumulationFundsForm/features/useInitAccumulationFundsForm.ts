import { useInitAccumulationFunds } from '@/modules/accumulationFunds/features';
import { useCurrencies } from '@/modules/currencies';

export function useInitAccumulationFundsForm() {
	const { fetchCurrencies } = useCurrencies();
	const { fetchInitAccumulationFunds } = useInitAccumulationFunds();

	const fetchData = async () => {
		await Promise.all([
			fetchInitAccumulationFunds(),
			fetchCurrencies({ showError: true })
		]);
	};

	fetchData();
}
