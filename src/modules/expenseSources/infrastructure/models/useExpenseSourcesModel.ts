import { NExpenseSources } from '@/modules/expenseSources/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useExpenseSourcesModel = (): NExpenseSources.IModel => {
	const { fetch } = useApiFetch();

	const fetchAll = () =>
		fetch<NExpenseSources.IExpenseSource[]>(
			`/${NExpenseSources.API_NAMESPACE}`
		).get();

	const fetchOne = (id: number) =>
		fetch<NExpenseSources.IExpenseSource>(
			`/${NExpenseSources.API_NAMESPACE}/${id}`
		).get();

	const create = (payload: NExpenseSources.ICreateExpenseSource) =>
		fetch<NExpenseSources.IExpenseSource>(
			`/${NExpenseSources.API_NAMESPACE}`
		).post(payload);

	const update = (id: number, payload: NExpenseSources.IUpdateExpenseSource) =>
		fetch<NExpenseSources.IExpenseSource>(
			`/${NExpenseSources.API_NAMESPACE}/${id}`
		).patch(payload);

	const remove = (id: number) =>
		fetch<NExpenseSources.IExpenseSource>(
			`/${NExpenseSources.API_NAMESPACE}/${id}`
		).delete();

	return {
		fetchAll,
		fetchOne,
		create,
		update,
		remove
	};
};
