import { useCurrencies } from '@/modules/currencies';

export function useInitCurrenciesSelector() {
	const { fetchCurrenciesList, fetchCurrencies } = useCurrencies();

	const fetchData = async () => {
		await fetchCurrenciesList();
		await fetchCurrencies({ force: true });
	};

	fetchData();
}
