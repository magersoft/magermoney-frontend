import { defineStore } from 'pinia';

import { appConfig } from '@/app/config';
import { NCalculations } from '@/modules/calculations/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';
import { roundWithDecimals } from '@/shared/utils';

const calculationsStore = defineStore('calculations', {
	state: (): NCalculations.IState => ({
		...fetchStateInitialState,
		totalBalance: null,
		totalIncomes: null,
		totalExpenses: null,
		monthlyBudget: null,
		percentByAmount: null,
		amountByPercent: null,
		transferDetails: null,
		summaryIncomesByCategories: [],
		summaryExpensesByCategories: []
	}),
	getters: {
		roundedAmountByPercent: (state) =>
			state.amountByPercent
				? String(roundWithDecimals(state.amountByPercent.amount))
				: String(0),
		roundedPercentByAmount: (state) =>
			state.percentByAmount
				? String(Math.round(Number(state.percentByAmount.percent)))
				: String(0),
		balanceAccumulationAmount: (state) =>
			state.percentByAmount?.amount || state.amountByPercent?.amount || 0,
		balanceMinusAccumulationPercent: (state) =>
			state.amountByPercent?.balance || state.percentByAmount?.balance || 0,
		balanceAccumulationCurrency: (state) =>
			state.amountByPercent?.currency ||
			state.percentByAmount?.currency ||
			appConfig.defaultCurrency
	},
	actions: {
		setTotalBalance(value: NCalculations.ITotalBalance) {
			this.totalBalance = value;
		},
		setTotalIncomes(value: NCalculations.ITotalIncomes) {
			this.totalIncomes = value;
		},
		setTotalExpenses(value: NCalculations.ITotalExpenses) {
			this.totalExpenses = value;
		},
		setMonthlyBudget(value: NCalculations.IMonthlyBudget) {
			this.monthlyBudget = value;
		},
		setPercentByAmount(value: NCalculations.IPercentByAmount) {
			this.percentByAmount = value;
		},
		setAmountByPercent(value: NCalculations.IAmountByPercent) {
			this.amountByPercent = value;
		},
		setTransferDetails(value: NCalculations.ITransferDetails) {
			this.transferDetails = value;
		},
		setSummaryIncomesByCategories(
			summaryIncomesByCategories: NCalculations.ISummaryIncomesByCategories[]
		) {
			this.summaryIncomesByCategories = summaryIncomesByCategories;
		},
		setSummaryExpensesByCategories(
			summaryExpensesByCategories: NCalculations.ISummaryExpensesByCategories[]
		) {
			this.summaryExpensesByCategories = summaryExpensesByCategories;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NCalculations.IError | null) {
			this.error = error;
		}
	}
});

export const useCalculationsStore = () => useStoreAdapter(calculationsStore());
