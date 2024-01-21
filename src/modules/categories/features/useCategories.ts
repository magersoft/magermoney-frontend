import {
	useFetchCategoriesService,
	useFetchCategoryService,
	useFetchExpenseCategoriesService,
	useFetchIncomeCategoriesService,
	useFetchSavedCategoriesService,
	useRemoveCategoryService
} from '@/modules/categories/infrastructure/services';
import { useCategoriesStore } from '@/modules/categories/infrastructure/stores';
import { mappingCategoriesForPicker } from '@/modules/categories/utils';

export function useCategories() {
	const {
		category,
		categories,
		page,
		pageSize,
		incomeCategories,
		expenseCategories,
		savedCategories,
		isLoading,
		isFinished
	} = useCategoriesStore();

	const { fetchCategories, fetchCategoriesPaginated } =
		useFetchCategoriesService();
	const { fetchExpenseCategories } = useFetchExpenseCategoriesService();
	const { fetchIncomeCategories } = useFetchIncomeCategoriesService();
	const { fetchSavedCategories } = useFetchSavedCategoriesService();
	const { fetchCategory } = useFetchCategoryService();
	const { removeCategory } = useRemoveCategoryService();

	const categoriesItems = computed(() =>
		mappingCategoriesForPicker(unref(categories))
	);

	const incomeCategoriesItems = computed(() =>
		mappingCategoriesForPicker(unref(incomeCategories))
	);

	const expenseCategoriesItems = computed(() =>
		mappingCategoriesForPicker(unref(expenseCategories))
	);

	const savedCategoriesItems = computed(() =>
		mappingCategoriesForPicker(unref(savedCategories))
	);

	return {
		category,
		categories,
		incomeCategories,
		expenseCategories,
		categoriesItems,
		incomeCategoriesItems,
		expenseCategoriesItems,
		savedCategoriesItems,
		isLoading,
		isFinished,
		page,
		pageSize,

		fetchCategories,
		fetchCategoriesPaginated,
		fetchIncomeCategories,
		fetchExpenseCategories,
		fetchSavedCategories,
		fetchCategory,
		removeCategory
	};
}
