import { useCurrenciesModel } from '@/modules/currencies/infrastructure/models';
import { useCurrenciesStore } from '@/modules/currencies/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useSaveCurrenciesService() {
	const { currencies, setCurrencies, setIsLoading, setError } =
		useCurrenciesStore();
	const { createAll } = useCurrenciesModel();

	const { fetchBaseList: saveCurrencies } = useBaseFetchList({
		fetchData: createAll,
		setData: setCurrencies,
		dataList: currencies,
		setIsLoading,
		setError
	});

	return {
		saveCurrencies
	};
}
