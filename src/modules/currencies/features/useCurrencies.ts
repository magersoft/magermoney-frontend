import { useFetchCurrenciesService } from '@/modules/currencies/services';

export function useCurrencies() {
	const { currencies, currenciesItems, isLoading, fetchCurrencies } =
		useFetchCurrenciesService();

	return {
		currenciesItems,
		currencies,
		isLoading,
		fetchCurrencies
	};
}
