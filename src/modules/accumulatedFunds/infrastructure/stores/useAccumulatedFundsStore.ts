import { defineStore } from 'pinia';

import { NAccumulatedFunds } from '@/modules/accumulatedFunds/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const accumulatedFundsStore = defineStore('accumulatedFunds', {
	state: (): NAccumulatedFunds.IState => ({
		...fetchStateInitialState,
		accumulatedFunds: [],
		accumulatedFund: null
	}),
	getters: {
		hasAccumulatedFunds: (state) => !!state.accumulatedFunds.length
	},
	actions: {
		setAccumulatedFunds(
			accumulatedFunds: NAccumulatedFunds.IAccumulatedFund[]
		) {
			this.accumulatedFunds = accumulatedFunds;
		},
		setAccumulatedFund(accumulatedFund: NAccumulatedFunds.IAccumulatedFund) {
			this.accumulatedFund = accumulatedFund;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NAccumulatedFunds.IError | null) {
			this.error = error;
		}
	}
});

export const useAccumulatedFundsStore = () =>
	useStoreAdapter(accumulatedFundsStore());
