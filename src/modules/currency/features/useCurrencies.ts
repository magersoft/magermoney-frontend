import { useFetchCurrenciesService } from '@/modules/currency/services';

export function useCurrencies() {
	const { currencies, isLoading, fetchCurrencies } =
		useFetchCurrenciesService();

	return {
		currencies,
		isLoading,
		fetchCurrencies
	};
}
