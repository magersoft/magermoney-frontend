import { NCategories } from '@/modules/categories/domain';
import { useCategoriesModel } from '@/modules/categories/infrastructure/models';
import { useCategoriesStore } from '@/modules/categories/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchExpenseCategoriesService() {
	const { expenseCategories, setExpenseCategories, setIsLoading, setError } =
		useCategoriesStore();
	const { fetchAll } = useCategoriesModel();

	const { fetchBaseList: fetchExpenseCategories } = useBaseFetchList({
		fetchData: (...args) =>
			fetchAll({
				...args,
				type: NCategories.CategoryType.EXPENSE,
				isDefault: true
			}),
		dataList: expenseCategories,
		setData: setExpenseCategories,
		setIsLoading,
		setError
	});

	return {
		fetchExpenseCategories
	};
}
