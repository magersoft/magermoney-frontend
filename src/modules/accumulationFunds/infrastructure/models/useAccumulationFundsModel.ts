import { NAccumulationFunds } from '@/modules/accumulationFunds/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useAccumulationFundsModel = (): NAccumulationFunds.IModel => {
	const { fetch } = useApiFetch();

	const fetchAll = () =>
		fetch<NAccumulationFunds.IAccumulationFund[]>(
			`/${NAccumulationFunds.API_NAMESPACE}`
		).get();

	const fetchOne = (id: number) =>
		fetch<NAccumulationFunds.IAccumulationFund>(
			`/${NAccumulationFunds.API_NAMESPACE}/${id}`
		).get();

	const create = (payload: NAccumulationFunds.ICreateAccumulationFund) =>
		fetch<NAccumulationFunds.IAccumulationFund>(
			`/${NAccumulationFunds.API_NAMESPACE}`
		).post(payload);

	const update = (
		id: number,
		payload: NAccumulationFunds.IUpdateAccumulationFund
	) =>
		fetch<NAccumulationFunds.IAccumulationFund>(
			`/${NAccumulationFunds.API_NAMESPACE}/${id}`
		).patch(payload);

	const remove = (id: number) =>
		fetch<NAccumulationFunds.IAccumulationFund>(
			`/${NAccumulationFunds.API_NAMESPACE}/${id}`
		).delete();

	return {
		fetchAll,
		fetchOne,
		create,
		update,
		remove
	};
};
