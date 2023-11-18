import { useFetchCurrenciesService } from '@/modules/currencies/services';

export function useCurrencies() {
	const { currencies, isLoading, fetchCurrencies } =
		useFetchCurrenciesService();

	return {
		currencies,
		isLoading,
		fetchCurrencies
	};
}
