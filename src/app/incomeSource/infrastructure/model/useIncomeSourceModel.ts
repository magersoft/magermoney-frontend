import { API_NAMESPACE, NIncomeSource } from '@/app/incomeSource/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useIncomeSourceModel = (): NIncomeSource.IModel => {
	const { fetch } = useApiFetch();

	const findAll = () =>
		fetch<NIncomeSource.IIncomeSource[]>(API_NAMESPACE).get();

	const findOne = (id: number) =>
		fetch<NIncomeSource.IIncomeSource>(`${API_NAMESPACE}/${id}`).get();

	const create = (payload: NIncomeSource.ICreateIncomeSource) =>
		fetch<NIncomeSource.IIncomeSource>(API_NAMESPACE).post(payload);

	const update = (id: number, payload: NIncomeSource.IUpdateIncomeSource) =>
		fetch<NIncomeSource.IIncomeSource>(`${API_NAMESPACE}/${id}`).patch(payload);

	const remove = (id: number) =>
		fetch<NIncomeSource.IIncomeSource>(`${API_NAMESPACE}/${id}`).delete();

	return {
		findAll,
		findOne,
		create,
		update,
		remove
	};
};
