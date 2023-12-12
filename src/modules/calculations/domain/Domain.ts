import { IFetchState } from '@/shared/domain';
import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';
import {
	AmountByPercentDto,
	MonthlyBudgetDto,
	PercentByAmountDto,
	TotalBalanceDto,
	TotalMonthlyExpensesDto,
	TotalMonthlyIncomesDto
} from '@/shared/types/api/generated';

export namespace NCalculations {
	export const API_NAMESPACE = 'calculations';

	export interface ITotalBalance extends TotalBalanceDto {}
	export interface ITotalMonthlyIncomes extends TotalMonthlyIncomesDto {}
	export interface ITotalMonthlyExpenses extends TotalMonthlyExpensesDto {}
	export interface IMonthlyBudget extends MonthlyBudgetDto {}
	export interface IPercentByAmount extends PercentByAmountDto {}
	export interface IAmountByPercent extends AmountByPercentDto {}

	export interface IState extends IFetchState {
		totalBalance: ITotalBalance | null;
		totalMonthlyIncomes: ITotalMonthlyIncomes | null;
		totalMonthlyExpenses: ITotalMonthlyExpenses | null;
		monthlyBudget: IMonthlyBudget | null;
		percentByAmount: IPercentByAmount | null;
		amountByPercent: IAmountByPercent | null;
	}

	export interface IModel {
		fetchTotalBalance: (currency: string) => RequestReturnValue<ITotalBalance>;
		fetchTotalMonthlyIncomes: (
			currency: string
		) => RequestReturnValue<ITotalMonthlyIncomes>;
		fetchTotalMonthlyExpenses: (
			currency: string
		) => RequestReturnValue<ITotalMonthlyExpenses>;
		fetchMonthlyBudget: (
			currency: string
		) => RequestReturnValue<IMonthlyBudget>;
		fetchPercentByAmount: (
			amount: string,
			currency: string
		) => RequestReturnValue<IPercentByAmount>;
		fetchAmountByPercent: (
			amount: string,
			currency: string
		) => RequestReturnValue<IAmountByPercent>;
	}

	export interface IError extends RequestReturnError {}
}
