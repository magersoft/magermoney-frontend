import { defineStore } from 'pinia';

import { NIncomes } from '@/modules/incomes/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const incomesStore = defineStore('incomes', {
	state: (): NIncomes.IState => ({
		...fetchStateInitialState,
		incomes: [],
		income: null
	}),
	actions: {
		setIncomes(incomes: NIncomes.IIncome[]) {
			this.incomes = incomes;
		},
		setIncome(income: NIncomes.IIncome) {
			this.income = income;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NIncomes.IError | null) {
			this.error = error;
		}
	}
});

export const useIncomesStore = () => useStoreAdapter(incomesStore());
