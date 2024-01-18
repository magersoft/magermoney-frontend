import {
	useCreateIncomeService,
	useFetchIncomesService,
	useRemoveIncomeService
} from '@/modules/incomes/infrastructure/services';
import { useIncomesStore } from '@/modules/incomes/infrastructure/stores';
import { mappingIncomesItems } from '@/modules/incomes/utils';

export function useIncomes() {
	const { incomes, page, pageSize, isLoading, isFinished, error } =
		useIncomesStore();

	const { fetchIncomes, fetchIncomesPaginated } = useFetchIncomesService();
	const { createIncome } = useCreateIncomeService();
	const { removeIncome } = useRemoveIncomeService();

	const incomesItems = computed(() => mappingIncomesItems(unref(incomes)));

	return {
		incomes,
		incomesItems,
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
