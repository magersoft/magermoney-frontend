import {
	useCreateExpenseSourceService,
	useFetchExpenseSourcesService,
	useRemoveExpenseSourceService
} from '@/modules/expenseSources/infrastructure/services';
import { useExpenseSourcesStore } from '@/modules/expenseSources/infrastructure/stores';
import { mappingExpenseSourcesForPicker } from '@/modules/expenseSources/utils';

export function useExpenseSources() {
	const { expenseSources, isLoading, hasExpenseSources, error } =
		useExpenseSourcesStore();

	const { fetchExpenseSources } = useFetchExpenseSourcesService();
	const { createExpenseSource } = useCreateExpenseSourceService();
	const { removeExpenseSource } = useRemoveExpenseSourceService();

	const expenseSourcesItems = computed(() =>
		mappingExpenseSourcesForPicker(unref(expenseSources))
	);

	return {
		expenseSources,
		expenseSourcesItems,
		isLoading,
		error,
		hasExpenseSources,

		fetchExpenseSources,
		createExpenseSource,
		removeExpenseSource
	};
}
