import { useCurrencies } from '@/modules/currencies';
import { useSavedFunds } from '@/modules/savedFunds';

export function useInitTransferForm() {
	const { fetchSavedFunds } = useSavedFunds();
	const { fetchCurrencies } = useCurrencies();

	const fetchData = async () => {
		await Promise.all([fetchSavedFunds(), fetchCurrencies()]);
	};

	fetchData();
}
