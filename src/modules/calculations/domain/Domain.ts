import { IFetchState } from '@/shared/domain';
import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';
import {
	AmountByPercentEntity,
	CalculationsControllerGetTransferDetailsParams,
	MonthlyBudgetEntity,
	PercentByAmountEntity,
	TotalBalanceEntity,
	TotalMonthlyExpensesEntity,
	TotalMonthlyIncomesEntity,
	TransferDetailsEntity
} from '@/shared/types/api/generated';

export namespace NCalculations {
	export const API_NAMESPACE = 'calculations';

	export interface ITotalBalance extends TotalBalanceEntity {}
	export interface ITotalMonthlyIncomes extends TotalMonthlyIncomesEntity {}
	export interface ITotalMonthlyExpenses extends TotalMonthlyExpensesEntity {}
	export interface IMonthlyBudget extends MonthlyBudgetEntity {}
	export interface IPercentByAmount extends PercentByAmountEntity {}
	export interface IAmountByPercent extends AmountByPercentEntity {}
	export interface ITransferDetails extends TransferDetailsEntity {}

	export interface IQueryTransferDetails
		extends CalculationsControllerGetTransferDetailsParams {}

	export interface IState extends IFetchState {
		totalBalance: ITotalBalance | null;
		totalMonthlyIncomes: ITotalMonthlyIncomes | null;
		totalMonthlyExpenses: ITotalMonthlyExpenses | null;
		monthlyBudget: IMonthlyBudget | null;
		percentByAmount: IPercentByAmount | null;
		amountByPercent: IAmountByPercent | null;
		transferDetails: ITransferDetails | null;
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
		fetchTransferDetails: (
			query: IQueryTransferDetails
		) => RequestReturnValue<ITransferDetails>;
	}

	export interface IError extends RequestReturnError {}
}
