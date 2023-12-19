import { NIncomes } from '@/modules/incomes/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useIncomesModel = (): NIncomes.IModel => {
	const { fetch, getUrlWithQueryParams } = useApiFetch();

	const fetchAll = (query?: NIncomes.IQueryIncomes) =>
		fetch<NIncomes.IIncome[]>(
			getUrlWithQueryParams(`/${NIncomes.API_NAMESPACE}`, query)
		).get();

	const fetchOne = (id: number) =>
		fetch<NIncomes.IIncome>(`/${NIncomes.API_NAMESPACE}/${id}`).get();

	const create = (payload: NIncomes.ICreateIncome) =>
		fetch<NIncomes.IIncome>(`/${NIncomes.API_NAMESPACE}`).post(payload);

	const update = (id: number, payload: NIncomes.IUpdateIncome) =>
		fetch<NIncomes.IIncome>(`/${NIncomes.API_NAMESPACE}/${id}`).patch(payload);

	const remove = (id: number) =>
		fetch<NIncomes.IIncome>(`/${NIncomes.API_NAMESPACE}/${id}`).delete();

	return {
		fetchAll,
		fetchOne,
		create,
		update,
		remove
	};
};
