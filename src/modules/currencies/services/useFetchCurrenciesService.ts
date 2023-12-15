import { useCurrenciesModel } from '@/modules/currencies/infrastructure/models';
import { useCurrenciesStore } from '@/modules/currencies/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchCurrenciesService() {
	const { currencies, setCurrencies, setIsLoading, setError } =
		useCurrenciesStore();
	const { fetchAll } = useCurrenciesModel();

	const { fetchBaseList: fetchCurrencies } = useBaseFetchList({
		fetchData: fetchAll,
		setData: setCurrencies,
		dataList: currencies,
		setIsLoading,
		setError
	});

	return {
		fetchCurrencies
	};
}
