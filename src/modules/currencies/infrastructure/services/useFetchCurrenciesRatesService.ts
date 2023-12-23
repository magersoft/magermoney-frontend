import { useCurrenciesModel } from '@/modules/currencies/infrastructure/models';
import { useCurrenciesStore } from '@/modules/currencies/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchCurrenciesRatesService() {
	const { currenciesRates, setCurrenciesRates, setIsLoading, setError } =
		useCurrenciesStore();
	const { fetchRates } = useCurrenciesModel();

	const { fetchBaseList: fetchCurrenciesRates } = useBaseFetchList({
		fetchData: fetchRates,
		setData: setCurrenciesRates,
		dataList: currenciesRates,
		setIsLoading,
		setError
	});

	return {
		fetchCurrenciesRates
	};
}
