import { NExpenses } from '@/modules/expenses/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useExpensesModel = (): NExpenses.IModel => {
	const { fetch, getUrlWithQueryParams } = useApiFetch();

	const fetchAll = (query?: NExpenses.IQueryExpenses) =>
		fetch<NExpenses.IExpense[]>(
			getUrlWithQueryParams(`/${NExpenses.API_NAMESPACE}`, query)
		).get();

	const fetchOne = (id: number) =>
		fetch<NExpenses.IExpense>(`/${NExpenses.API_NAMESPACE}/${id}`).get();

	const create = (payload: NExpenses.ICreateExpense) =>
		fetch<NExpenses.IExpense>(`/${NExpenses.API_NAMESPACE}`).post(payload);

	const update = (id: number, payload: NExpenses.IUpdateExpense) =>
		fetch<NExpenses.IExpense>(`/${NExpenses.API_NAMESPACE}/${id}`).patch(
			payload
		);

	const remove = (id: number) =>
		fetch<NExpenses.IExpense>(`/${NExpenses.API_NAMESPACE}/${id}`).delete();

	return {
		fetchAll,
		fetchOne,
		create,
		update,
		remove
	};
};
