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

	const fetchTotalIncomes = (currency: string) =>
		fetch<NCalculations.ITotalIncomes>(
			getUrlWithQueryParams(`/${NCalculations.API_NAMESPACE}/total-incomes`, {
				currency
			})
		).get();

	const fetchTotalExpenses = (currency: string) =>
		fetch<NCalculations.ITotalExpenses>(
			getUrlWithQueryParams(`/${NCalculations.API_NAMESPACE}/total-expenses`, {
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
		fetchTotalIncomes,
		fetchTotalExpenses,
		fetchPercentByAmount,
		fetchAmountByPercent
	};
};
