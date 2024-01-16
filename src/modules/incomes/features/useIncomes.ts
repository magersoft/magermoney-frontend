import {
	useCreateIncomeService,
	useFetchIncomesService,
	useRemoveIncomeService
} from '@/modules/incomes/infrastructure/services';
import { useIncomesStore } from '@/modules/incomes/infrastructure/stores';

export function useIncomes() {
	const { incomes, page, pageSize, isLoading, isFinished, error } =
		useIncomesStore();

	const { fetchIncomes, fetchIncomesPaginated } = useFetchIncomesService();
	const { createIncome } = useCreateIncomeService();
	const { removeIncome } = useRemoveIncomeService();

	return {
		incomes,
		page,
		pageSize,
		isLoading,
		isFinished,
		error,

		fetchIncomes,
		fetchIncomesPaginated,
		createIncome,
		removeIncome
	};
}
