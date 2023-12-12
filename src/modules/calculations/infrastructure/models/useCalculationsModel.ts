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

	const fetchTotalMonthlyIncomes = (currency: string) =>
		fetch<NCalculations.ITotalMonthlyIncomes>(
			getUrlWithQueryParams(
				`/${NCalculations.API_NAMESPACE}/total-monthly-incomes`,
				{
					currency
				}
			)
		).get();

	const fetchTotalMonthlyExpenses = (currency: string) =>
		fetch<NCalculations.ITotalMonthlyExpenses>(
			getUrlWithQueryParams(
				`/${NCalculations.API_NAMESPACE}/total-monthly-expenses`,
				{
					currency
				}
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

	return {
		fetchTotalBalance,
		fetchTotalMonthlyIncomes,
		fetchTotalMonthlyExpenses,
		fetchMonthlyBudget,
		fetchPercentByAmount,
		fetchAmountByPercent
	};
};
