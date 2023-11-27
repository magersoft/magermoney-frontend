import { NAccumulatedFunds } from '@/modules/accumulatedFunds/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useAccumulatedFundsModel = (): NAccumulatedFunds.IModel => {
	const { fetch } = useApiFetch();

	const findAll = () =>
		fetch<NAccumulatedFunds.IAccumulatedFund[]>(
			`/${NAccumulatedFunds.API_NAMESPACE}`
		).get();

	const findOne = (id: number) =>
		fetch<NAccumulatedFunds.IAccumulatedFund>(
			`/${NAccumulatedFunds.API_NAMESPACE}/${id}`
		).get();

	const create = (payload: NAccumulatedFunds.ICreateAccumulatedFund) =>
		fetch<NAccumulatedFunds.IAccumulatedFund>(
			`/${NAccumulatedFunds.API_NAMESPACE}`
		).post(payload);

	const update = (
		id: number,
		payload: NAccumulatedFunds.IUpdateAccumulatedFund
	) =>
		fetch<NAccumulatedFunds.IAccumulatedFund>(
			`/${NAccumulatedFunds.API_NAMESPACE}/${id}`
		).patch(payload);

	const remove = (id: number) =>
		fetch<NAccumulatedFunds.IAccumulatedFund>(
			`/${NAccumulatedFunds.API_NAMESPACE}/${id}`
		).delete();

	return {
		findAll,
		findOne,
		create,
		update,
		remove
	};
};
