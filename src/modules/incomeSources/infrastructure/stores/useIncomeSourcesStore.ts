import { defineStore } from 'pinia';

import { NIncomeSources } from '@/modules/incomeSources/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const incomeSourcesStore = defineStore('incomeSources', {
	state: (): NIncomeSources.IState => ({
		...fetchStateInitialState,
		incomeSources: [],
		incomeSource: null
	}),
	getters: {
		hasIncomeSources: (state) => !!state.incomeSources.length
	},
	actions: {
		setIncomeSources(incomeSources: NIncomeSources.IIncomeSource[]) {
			this.incomeSources = incomeSources;
		},
		setIncomeSource(incomeSource: NIncomeSources.IIncomeSource) {
			this.incomeSource = incomeSource;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NIncomeSources.IError | null) {
			this.error = error;
		}
	}
});

export const useIncomeSourcesStore = () =>
	useStoreAdapter(incomeSourcesStore());
