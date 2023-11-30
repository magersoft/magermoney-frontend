import { NCalculations } from '@/modules/calculations/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useCalculationsModel = (): NCalculations.IModel => {
	const { fetch, getUrlWithQueryParams } = useApiFetch();

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
		fetchPercentByAmount,
		fetchAmountByPercent
	};
};