import { useCurrencyModel } from '@/modules/currency/infrastructure/model';
import { useCurrencyStore } from '@/modules/currency/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchCurrenciesService() {
	const { findAll } = useCurrencyModel();
	const { currencies, setCurrencies, isLoading, setIsLoading, setError } =
		useCurrencyStore();

	const { fetchBaseList: fetchCurrencies } = useBaseFetchList({
		fetchData: findAll,
		setData: setCurrencies,
		dataList: currencies,
		setIsLoading,
		setError
	});

	return {
		currencies,
		isLoading,
		fetchCurrencies
	};
}
