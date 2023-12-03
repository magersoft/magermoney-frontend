import { defineStore } from 'pinia';

import { NMonthlyExpenses } from '@/modules/monthlyExpenses/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const monthlyExpensesStore = defineStore('monthlyExpenses', {
	state: (): NMonthlyExpenses.IState => ({
		...fetchStateInitialState,
		monthlyExpenses: [],
		monthlyExpense: null
	}),
	getters: {
		hasMonthlyExpenses: (state) => !!state.monthlyExpenses.length
	},
	actions: {
		setMonthlyExpenses(monthlyExpenses: NMonthlyExpenses.IMonthlyExpense[]) {
			this.monthlyExpenses = monthlyExpenses;
		},
		setMonthlyExpense(monthlyExpense: NMonthlyExpenses.IMonthlyExpense) {
			this.monthlyExpense = monthlyExpense;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NMonthlyExpenses.IError | null) {
			this.error = error;
		}
	}
});

export const useMonthlyExpensesStore = () =>
	useStoreAdapter(monthlyExpensesStore());
