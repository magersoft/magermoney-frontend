import { defineStore } from 'pinia';

import { NExpenses } from '@/modules/expenses/domain';
import { fetchPaginatedStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const expenseStore = defineStore('expenses', {
	state: (): NExpenses.IState => ({
		...fetchPaginatedStateInitialState,
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
		setPage(value: number) {
			this.page = value;
		},
		setPageSize(value: number) {
			this.pageSize = value;
		},
		setIsFinished(value: boolean) {
			this.isFinished = value;
		},
		setError(error: NExpenses.IError | null) {
			this.error = error;
		}
	}
});

export const useExpensesStore = () => useStoreAdapter(expenseStore());
