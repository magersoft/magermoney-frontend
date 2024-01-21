import { IFetchState } from '@/shared/domain';
import { RequestReturnError, RequestReturnValue } from '@/shared/types/api';
import {
	AmountByPercentEntity,
	CalculationsControllerGetSummaryExpensesByCategoriesParams,
	CalculationsControllerGetSummaryIncomesByCategoriesParams,
	CalculationsControllerGetTotalExpensesParams,
	CalculationsControllerGetTotalIncomesParams,
	CalculationsControllerGetTransferDetailsParams,
	MonthlyBudgetEntity,
	PercentByAmountEntity,
	SummaryExpensesByCategoriesEntity,
	SummaryIncomesByCategoriesEntity,
	TotalBalanceEntity,
	TotalExpensesEntity,
	TotalIncomesEntity,
	TransferDetailsEntity
} from '@/shared/types/api/generated';

export namespace NCalculations {
	export const API_NAMESPACE = 'calculations';

	export interface ITotalBalance extends TotalBalanceEntity {}
	export interface ITotalIncomes extends TotalIncomesEntity {}
	export interface ITotalExpenses extends TotalExpensesEntity {}
	export interface IMonthlyBudget extends MonthlyBudgetEntity {}
	export interface IPercentByAmount extends PercentByAmountEntity {}
	export interface IAmountByPercent extends AmountByPercentEntity {}
	export interface ITransferDetails extends TransferDetailsEntity {}
	export interface ISummaryIncomesByCategories
		extends SummaryIncomesByCategoriesEntity {}
	export interface ISummaryExpensesByCategories
		extends SummaryExpensesByCategoriesEntity {}

	export interface IQueryTotalIncomes
		extends CalculationsControllerGetTotalIncomesParams {}
	export interface IQueryTotalExpenses
		extends CalculationsControllerGetTotalExpensesParams {}
	export interface IQueryTransferDetails
		extends CalculationsControllerGetTransferDetailsParams {}
	export interface IQuerySummaryIncomesByCategories
		extends CalculationsControllerGetSummaryIncomesByCategoriesParams {}
	export interface IQuerySummaryExpensesByCategories
		extends CalculationsControllerGetSummaryExpensesByCategoriesParams {}

	export interface IState extends IFetchState {
		totalBalance: ITotalBalance | null;
		totalIncomes: ITotalIncomes | null;
		totalExpenses: ITotalExpenses | null;
		monthlyBudget: IMonthlyBudget | null;
		percentByAmount: IPercentByAmount | null;
		amountByPercent: IAmountByPercent | null;
		transferDetails: ITransferDetails | null;
		summaryIncomesByCategories: ISummaryIncomesByCategories[];
		summaryExpensesByCategories: ISummaryExpensesByCategories[];
	}

	export interface IModel {
		fetchTotalBalance: (currency: string) => RequestReturnValue<ITotalBalance>;
		fetchTotalIncomes: (
			query: IQueryTotalIncomes
		) => RequestReturnValue<ITotalIncomes>;
		fetchTotalExpenses: (
			query: IQueryTotalExpenses
		) => RequestReturnValue<ITotalExpenses>;
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
		fetchSummaryIncomesByCategories: (
			query: IQuerySummaryIncomesByCategories
		) => RequestReturnValue<ISummaryIncomesByCategories[]>;
		fetchSummaryExpensesByCategories: (
			query: IQuerySummaryExpensesByCategories
		) => RequestReturnValue<ISummaryExpensesByCategories[]>;
	}

	export interface IError extends RequestReturnError {}
}
