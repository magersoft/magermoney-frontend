import {
	useFetchCurrenciesListService,
	useFetchCurrenciesRatesService,
	useFetchCurrenciesService,
	useSaveCurrenciesService
} from '@/modules/currencies/infrastructure/services';
import { useCurrenciesStore } from '@/modules/currencies/infrastructure/stores';
import { mappingCurrenciesForPicker } from '@/modules/currencies/utils';
import { useSettingsStore } from '@/modules/settings/infrastructure/stores';
import { useUser } from '@/modules/users';

export function useCurrencies() {
	const {
		currencies,
		currenciesList,
		currenciesIds,
		currenciesRates,
		isLoading,
		restoreStore: restoreCurrenciesStore
	} = useCurrenciesStore();
	const { fetchCurrencies } = useFetchCurrenciesService();
	const { fetchCurrenciesList } = useFetchCurrenciesListService();
	const { fetchCurrenciesRates } = useFetchCurrenciesRatesService();
	const { saveCurrencies } = useSaveCurrenciesService();

	const currenciesItems = computed(() =>
		mappingCurrenciesForPicker(unref(currencies))
	);

	const currenciesListItems = computed(() =>
		mappingCurrenciesForPicker(unref(currenciesList))
	);

	const { setCurrency } = useSettingsStore();
	const { user, updateUser } = useUser();

	const updateUserCurrency = async (currency: string) => {
		if (!unref(user)) return;
		await updateUser({ showError: true }, { currency });
	};

	const changeCurrency = async (currency: string) => {
		setCurrency(currency);
		await updateUserCurrency(currency);
	};

	return {
		currenciesItems,
		currenciesListItems,
		currenciesRates,
		currenciesIds,
		currencies,
		isLoading,
		fetchCurrencies,
		fetchCurrenciesList,
		fetchCurrenciesRates,
		saveCurrencies,
		changeCurrency,
		restoreCurrenciesStore
	};
}
