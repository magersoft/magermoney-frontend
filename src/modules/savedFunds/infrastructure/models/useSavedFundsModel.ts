import { NSavedFunds } from '@/modules/savedFunds/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useSavedFundsModel = (): NSavedFunds.IModel => {
	const { fetch } = useApiFetch();

	const findAll = () =>
		fetch<NSavedFunds.ISavedFund[]>(`/${NSavedFunds.API_NAMESPACE}`).get();

	const findOne = (id: number) =>
		fetch<NSavedFunds.ISavedFund>(`/${NSavedFunds.API_NAMESPACE}/${id}`).get();

	const create = (payload: NSavedFunds.ICreateSavedFund) =>
		fetch<NSavedFunds.ISavedFund>(`/${NSavedFunds.API_NAMESPACE}`).post(
			payload
		);

	const update = (id: number, payload: NSavedFunds.IUpdateSavedFund) =>
		fetch<NSavedFunds.ISavedFund>(`/${NSavedFunds.API_NAMESPACE}/${id}`).patch(
			payload
		);

	const remove = (id: number) =>
		fetch<NSavedFunds.ISavedFund>(
			`/${NSavedFunds.API_NAMESPACE}/${id}`
		).delete();

	return {
		findAll,
		findOne,
		create,
		update,
		remove
	};
};
