import { defineStore } from 'pinia';

import { NCurrencies } from '@/modules/currencies/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const currenciesStore = defineStore('currencies', {
	state: (): NCurrencies.IState => ({
		...fetchStateInitialState,
		currencies: [],
		currenciesList: [],
		currenciesIds: [],
		currenciesRates: []
	}),
	actions: {
		setCurrencies(currencies: NCurrencies.ICurrency[]) {
			this.currencies = currencies;
			this.currenciesIds = currencies.map((currency) => currency.id);
		},
		setCurrenciesList(currenciesList: NCurrencies.ICurrency[]) {
			this.currenciesList = currenciesList;
		},
		setCurrenciesRates(currenciesRates: NCurrencies.ICurrencyRate[]) {
			this.currenciesRates = currenciesRates;
		},
		setCurrenciesIds(currenciesIds: number[]) {
			this.currenciesIds = currenciesIds;
		},
		setIsLoading(isLoading: boolean) {
			this.isLoading = isLoading;
		},
		setError(error: NCurrencies.IError | null) {
			this.error = error;
		}
	}
});

export const useCurrenciesStore = () => useStoreAdapter(currenciesStore());
