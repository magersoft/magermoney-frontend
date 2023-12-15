import { defineStore } from 'pinia';

import { NExpenses } from '@/modules/expenses/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const expenseStore = defineStore('expenses', {
	state: (): NExpenses.IState => ({
		...fetchStateInitialState,
		expenses: [],
		expense: null
	}),
	actions: {
		setExpenses(expenses: NExpenses.IExpense[]) {
			this.expenses = expenses;
		},
		setExpense(expense: NExpenses.IExpense) {
			this.expense = expense;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NExpenses.IError | null) {
			this.error = error;
		}
	}
});

export const useExpensesStore = () => useStoreAdapter(expenseStore());
