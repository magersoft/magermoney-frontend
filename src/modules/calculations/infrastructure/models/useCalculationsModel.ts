import { NCalculations } from '@/modules/calculations/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useCalculationsModel = (): NCalculations.IModel => {
	const { fetch, getUrlWithQueryParams } = useApiFetch();

	const fetchTotalBalance = (currency: string) =>
		fetch<NCalculations.ITotalBalance>(
			getUrlWithQueryParams(`/${NCalculations.API_NAMESPACE}/total-balance`, {
				currency
			})
		).get();

	const fetchTotalIncomes = (query: NCalculations.IQueryTotalIncomes) =>
		fetch<NCalculations.ITotalIncomes>(
			getUrlWithQueryParams(
				`/${NCalculations.API_NAMESPACE}/total-incomes`,
				query
			)
		).get();

	const fetchTotalExpenses = (query: NCalculations.IQueryTotalExpenses) =>
		fetch<NCalculations.ITotalExpenses>(
			getUrlWithQueryParams(
				`/${NCalculations.API_NAMESPACE}/total-expenses`,
				query
			)
		).get();

	const fetchMonthlyBudget = (currency: string) =>
		fetch<NCalculations.IMonthlyBudget>(
			getUrlWithQueryParams(`/${NCalculations.API_NAMESPACE}/monthly-budget`, {
				currency
			})
		).get();

	const fetchPercentByAmount = (amount: string, currency: string) =>
		fetch<NCalculations.IPercentByAmount>(
			getUrlWithQueryParams(
				`/${NCalculations.API_NAMESPACE}/percent-by-amount`,
				{
					value: amount,
					currency
				}
			)
		).get();

	const fetchAmountByPercent = (percent: string, currency: string) =>
		fetch<NCalculations.IAmountByPercent>(
			getUrlWithQueryParams(
				`/${NCalculations.API_NAMESPACE}/amount-by-percent`,
				{
					value: percent,
					currency
				}
			)
		).get();

	const fetchTransferDetails = (query: NCalculations.IQueryTransferDetails) =>
		fetch<NCalculations.ITransferDetails>(
			getUrlWithQueryParams(
				`/${NCalculations.API_NAMESPACE}/get-transfer-details`,
				query
			)
		).get();

	const fetchSummaryIncomesByCategories = (
		query: NCalculations.IQuerySummaryIncomesByCategories
	) =>
		fetch<NCalculations.ISummaryIncomesByCategories[]>(
			getUrlWithQueryParams(
				`/${NCalculations.API_NAMESPACE}/get-summary-incomes-by-categories`,
				query
			)
		).get();

	const fetchSummaryExpensesByCategories = (
		query: NCalculations.IQuerySummaryExpensesByCategories
	) =>
		fetch<NCalculations.ISummaryExpensesByCategories[]>(
			getUrlWithQueryParams(
				`/${NCalculations.API_NAMESPACE}/get-summary-expenses-by-categories`,
				query
			)
		).get();

	return {
		fetchTotalBalance,
		fetchTotalIncomes,
		fetchTotalExpenses,
		fetchMonthlyBudget,
		fetchPercentByAmount,
		fetchAmountByPercent,
		fetchTransferDetails,
		fetchSummaryIncomesByCategories,
		fetchSummaryExpensesByCategories
	};
};
