import { defineStore } from 'pinia';

import { NIncomeSource } from '@/app/incomeSource/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const incomeSourceStore = defineStore('incomeSource', {
	state: (): NIncomeSource.IState => ({
		...fetchStateInitialState,
		incomeSources: [],
		incomeSource: null
	}),
	actions: {
		setIncomeSources(incomeSources: NIncomeSource.IIncomeSource[]) {
			this.incomeSources = incomeSources;
		},
		setIncomeSource(incomeSource: NIncomeSource.IIncomeSource) {
			this.incomeSource = incomeSource;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NIncomeSource.IError | null) {
			this.error = error;
		}
	}
});

export const useIncomeSourceStore = () => useStoreAdapter(incomeSourceStore());
