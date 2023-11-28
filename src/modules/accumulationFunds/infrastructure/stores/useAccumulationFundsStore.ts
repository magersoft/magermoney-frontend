import { defineStore } from 'pinia';

import { NAccumulationFunds } from '@/modules/accumulationFunds/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const accumulationFundStore = defineStore('accumulationFund', {
	state: (): NAccumulationFunds.IState => ({
		...fetchStateInitialState,
		accumulationFunds: [],
		accumulationFund: null
	}),
	actions: {
		setAccumulationFunds(
			accumulationFunds: NAccumulationFunds.IAccumulationFund[]
		) {
			this.accumulationFunds = accumulationFunds;
		},
		setAccumulationFund(
			accumulationFund: NAccumulationFunds.IAccumulationFund
		) {
			this.accumulationFund = accumulationFund;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NAccumulationFunds.IError | null) {
			this.error = error;
		}
	}
});

export const useAccumulationFundStore = () =>
	useStoreAdapter(accumulationFundStore());
