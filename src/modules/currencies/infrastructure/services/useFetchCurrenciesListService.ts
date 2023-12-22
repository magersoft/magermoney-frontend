import { useCurrenciesModel } from '@/modules/currencies/infrastructure/models';
import { useCurrenciesStore } from '@/modules/currencies/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchCurrenciesListService() {
	const { setCurrenciesList, currenciesList, setIsLoading, setError } =
		useCurrenciesStore();
	const { fetchList } = useCurrenciesModel();

	const { fetchBaseList: fetchCurrenciesList } = useBaseFetchList({
		fetchData: fetchList,
		setData: setCurrenciesList,
		dataList: currenciesList,
		setIsLoading,
		setError
	});

	return {
		fetchCurrenciesList
	};
}
