import { defineStore } from 'pinia';

import { NSavedFunds } from '@/modules/savedFunds/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const savedFundsStore = defineStore('savedFunds', {
	state: (): NSavedFunds.IState => ({
		...fetchStateInitialState,
		savedFunds: [],
		savedFund: null
	}),
	getters: {
		hasSavedFunds: (state) => !!state.savedFunds.length,
		countSavedFunds: (state) => state.savedFunds.length
	},
	actions: {
		setSavedFunds(savedFunds: NSavedFunds.ISavedFund[]) {
			this.savedFunds = savedFunds;
		},
		setSavedFund(savedFund: NSavedFunds.ISavedFund | null) {
			this.savedFund = savedFund;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NSavedFunds.IError | null) {
			this.error = error;
		}
	}
});

export const useSavedFundsStore = () => useStoreAdapter(savedFundsStore());
