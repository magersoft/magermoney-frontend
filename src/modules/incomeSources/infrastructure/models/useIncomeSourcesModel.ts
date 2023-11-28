import { NIncomeSources } from '@/modules/incomeSources/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useIncomeSourcesModel = (): NIncomeSources.IModel => {
	const { fetch } = useApiFetch();

	const fetchAll = () =>
		fetch<NIncomeSources.IIncomeSource[]>(
			`/${NIncomeSources.API_NAMESPACE}`
		).get();

	const fetchOne = (id: number) =>
		fetch<NIncomeSources.IIncomeSource>(
			`/${NIncomeSources.API_NAMESPACE}/${id}`
		).get();

	const create = (payload: NIncomeSources.ICreateIncomeSource) =>
		fetch<NIncomeSources.IIncomeSource>(
			`/${NIncomeSources.API_NAMESPACE}`
		).post(payload);

	const update = (id: number, payload: NIncomeSources.IUpdateIncomeSource) =>
		fetch<NIncomeSources.IIncomeSource>(
			`/${NIncomeSources.API_NAMESPACE}/${id}`
		).patch(payload);

	const remove = (id: number) =>
		fetch<NIncomeSources.IIncomeSource>(
			`/${NIncomeSources.API_NAMESPACE}/${id}`
		).delete();

	return {
		fetchAll,
		fetchOne,
		create,
		update,
		remove
	};
};
