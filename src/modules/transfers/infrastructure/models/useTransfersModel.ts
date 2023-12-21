import { NTransfers } from '@/modules/transfers/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useTransfersModel = (): NTransfers.IModel => {
	const { fetch } = useApiFetch();

	const fetchAll = () =>
		fetch<NTransfers.ITransfer[]>(`/${NTransfers.API_NAMESPACE}`).get();

	const fetchOne = (id: number) =>
		fetch<NTransfers.ITransfer>(`/${NTransfers.API_NAMESPACE}/${id}`).get();

	const create = (payload: NTransfers.ICreateTransfer) =>
		fetch<NTransfers.ITransfer>(`/${NTransfers.API_NAMESPACE}`).post(payload);

	const update = (id: number, payload: NTransfers.IUpdateTransfer) =>
		fetch<NTransfers.ITransfer>(`/${NTransfers.API_NAMESPACE}/${id}`).patch(
			payload
		);

	const remove = (id: number) =>
		fetch<NTransfers.ITransfer>(`/${NTransfers.API_NAMESPACE}/${id}`).delete();

	return {
		fetchAll,
		fetchOne,
		create,
		update,
		remove
	};
};
