import { useCurrenciesStore } from '@/modules/currencies/infrastructure/stores';
import { useFetchCurrenciesService } from '@/modules/currencies/services';
import { mappingCurrenciesForPicker } from '@/modules/currencies/utils';

export function useCurrencies() {
	const { currencies, isLoading } = useCurrenciesStore();
	const { fetchCurrencies } = useFetchCurrenciesService();

	const currenciesItems = computed(() =>
		mappingCurrenciesForPicker(unref(currencies))
	);

	return {
		currenciesItems,
		currencies,
		isLoading,
		fetchCurrencies
	};
}
