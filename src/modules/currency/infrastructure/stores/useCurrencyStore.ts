import { defineStore } from 'pinia';

import { NCurrency } from '@/modules/currency/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const currencyStore = defineStore('currency', {
	state: (): NCurrency.IState => ({
		...fetchStateInitialState,
		currencies: []
	}),
	actions: {
		setCurrencies(currencies: NCurrency.ICurrency[]) {
			this.currencies = currencies;
		},
		setIsLoading(isLoading: boolean) {
			this.isLoading = isLoading;
		},
		setError(error: NCurrency.IError | null) {
			this.error = error;
		}
	}
});

export const useCurrencyStore = () => useStoreAdapter(currencyStore());
