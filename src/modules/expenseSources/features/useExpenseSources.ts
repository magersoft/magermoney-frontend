import { useFetchExpenseSourcesService } from '@/modules/expenseSources/infrastructure/services';
import { useExpenseSourcesStore } from '@/modules/expenseSources/infrastructure/stores';
import { mappingExpenseSourcesForPicker } from '@/modules/expenseSources/utils';

export function useExpenseSources() {
	const { expenseSources, isLoading } = useExpenseSourcesStore();
	const { fetchExpenseSources } = useFetchExpenseSourcesService();

	const expenseSourcesItems = computed(() =>
		mappingExpenseSourcesForPicker(unref(expenseSources))
	);

	return {
		expenseSources,
		expenseSourcesItems,
		isLoading,
		fetchExpenseSources
	};
}
