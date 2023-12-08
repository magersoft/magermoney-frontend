import { defineStore } from 'pinia';

import { NExpenseSources } from '@/modules/expenseSources/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const expenseSourcesStore = defineStore('expenseSources', {
	state: (): NExpenseSources.IState => ({
		...fetchStateInitialState,
		expenseSources: [],
		expenseSource: null
	}),
	getters: {
		hasExpenseSources: (state) => !!state.expenseSources.length
	},
	actions: {
		setExpenseSources(expenseSources: NExpenseSources.IExpenseSource[]) {
			this.expenseSources = expenseSources;
		},
		setExpenseSource(expenseSource: NExpenseSources.IExpenseSource) {
			this.expenseSource = expenseSource;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NExpenseSources.IError | null) {
			this.error = error;
		}
	}
});

export const useExpenseSourcesStore = () =>
	useStoreAdapter(expenseSourcesStore());
