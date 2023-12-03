import { NMonthlyExpenses } from '@/modules/monthlyExpenses/domain';
import { useApiFetch } from '@/shared/infrastructure/api';

export const useMonthlyExpensesModel = (): NMonthlyExpenses.IModel => {
	const { fetch } = useApiFetch();

	const fetchAll = () =>
		fetch<NMonthlyExpenses.IMonthlyExpense[]>(
			`/${NMonthlyExpenses.API_NAMESPACE}`
		).get();

	const fetchOne = (id: number) =>
		fetch<NMonthlyExpenses.IMonthlyExpense>(
			`/${NMonthlyExpenses.API_NAMESPACE}/${id}`
		).get();

	const create = (payload: NMonthlyExpenses.ICreateMonthlyExpense) =>
		fetch<NMonthlyExpenses.IMonthlyExpense>(
			`/${NMonthlyExpenses.API_NAMESPACE}`
		).post(payload);

	const update = (
		id: number,
		payload: NMonthlyExpenses.IUpdateMonthlyExpense
	) =>
		fetch<NMonthlyExpenses.IMonthlyExpense>(
			`/${NMonthlyExpenses.API_NAMESPACE}/${id}`
		).patch(payload);

	const remove = (id: number) =>
		fetch<NMonthlyExpenses.IMonthlyExpense>(
			`/${NMonthlyExpenses.API_NAMESPACE}/${id}`
		).delete();

	return {
		fetchAll,
		fetchOne,
		create,
		update,
		remove
	};
};
