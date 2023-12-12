import { defineStore } from 'pinia';

import { appConfig } from '@/app/config';
import { NCalculations } from '@/modules/calculations/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const calculationsStore = defineStore('calculations', {
	state: (): NCalculations.IState => ({
		...fetchStateInitialState,
		totalBalance: null,
		totalMonthlyIncomes: null,
		totalMonthlyExpenses: null,
		monthlyBudget: null,
		percentByAmount: null,
		amountByPercent: null
	}),
	getters: {
		roundedAmountByPercent: (state) =>
			state.amountByPercent
				? String(Math.round(Number(state.amountByPercent.amount)))
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
		setTotalMonthlyIncomes(value: NCalculations.ITotalMonthlyIncomes) {
			this.totalMonthlyIncomes = value;
		},
		setTotalMonthlyExpenses(value: NCalculations.ITotalMonthlyExpenses) {
			this.totalMonthlyExpenses = value;
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
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NCalculations.IError | null) {
			this.error = error;
		}
	}
});

export const useCalculationsStore = () => useStoreAdapter(calculationsStore());
