import { useFetchCategoriesService } from '@/modules/categories/infrastructure/services';
import { useCategoriesStore } from '@/modules/categories/infrastructure/stores';
import { mappingCategoriesForPicker } from '@/modules/categories/utils';

export function useCategories() {
	const {
		categories,
		incomesCategories,
		expensesCategories,
		savedCategories,
		isLoading
	} = useCategoriesStore();

	const { fetchCategories } = useFetchCategoriesService();

	const incomesCategoriesItems = computed(() =>
		mappingCategoriesForPicker(unref(incomesCategories))
	);

	const expensesCategoriesItems = computed(() =>
		mappingCategoriesForPicker(unref(expensesCategories))
	);

	const savedCategoriesItems = computed(() =>
		mappingCategoriesForPicker(unref(savedCategories))
	);

	return {
		categories,
		incomesCategories,
		expensesCategories,
		incomesCategoriesItems,
		expensesCategoriesItems,
		savedCategoriesItems,
		isLoading,

		fetchCategories
	};
}
