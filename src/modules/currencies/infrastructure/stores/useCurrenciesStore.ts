import { defineStore } from 'pinia';

import { NCurrencies } from '@/modules/currencies/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const currenciesStore = defineStore('currencies', {
	state: (): NCurrencies.IState => ({
		...fetchStateInitialState,
		currencies: []
	}),
	actions: {
		setCurrencies(currencies: NCurrencies.ICurrency[]) {
			this.currencies = currencies;
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
