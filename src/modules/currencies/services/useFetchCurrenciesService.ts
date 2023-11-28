import { useCurrenciesModel } from '@/modules/currencies/infrastructure/models';
import { useCurrenciesStore } from '@/modules/currencies/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchCurrenciesService() {
	const { fetchAll } = useCurrenciesModel();
	const {
		currencies,
		currenciesItems,
		setCurrencies,
		isLoading,
		setIsLoading,
		setError
	} = useCurrenciesStore();

	const { fetchBaseList: fetchCurrencies } = useBaseFetchList({
		fetchData: fetchAll,
		setData: setCurrencies,
		dataList: currencies,
		setIsLoading,
		setError
	});

	return {
		currenciesItems,
		currencies,
		isLoading,
		fetchCurrencies
	};
}
