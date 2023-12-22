import {
	useFetchCurrenciesListService,
	useFetchCurrenciesService,
	useSaveCurrenciesService
} from '@/modules/currencies/infrastructure/services';
import { useCurrenciesStore } from '@/modules/currencies/infrastructure/stores';
import { mappingCurrenciesForPicker } from '@/modules/currencies/utils';

export function useCurrencies() {
	const {
		currencies,
		currenciesList,
		currenciesIds,
		isLoading,
		restoreStore: restoreCurrenciesStore
	} = useCurrenciesStore();
	const { fetchCurrencies } = useFetchCurrenciesService();
	const { fetchCurrenciesList } = useFetchCurrenciesListService();
	const { saveCurrencies } = useSaveCurrenciesService();

	const currenciesItems = computed(() =>
		mappingCurrenciesForPicker(unref(currencies))
	);

	const currenciesListItems = computed(() =>
		mappingCurrenciesForPicker(unref(currenciesList))
	);

	return {
		currenciesItems,
		currenciesListItems,
		currenciesIds,
		currencies,
		isLoading,
		fetchCurrencies,
		fetchCurrenciesList,
		saveCurrencies,
		restoreCurrenciesStore
	};
}
