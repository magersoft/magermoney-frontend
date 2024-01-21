import { NCategories } from '@/modules/categories/domain';
import { useCategoriesModel } from '@/modules/categories/infrastructure/models';
import { useCategoriesStore } from '@/modules/categories/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchIncomeCategoriesService() {
	const { incomeCategories, setIncomeCategories, setIsLoading, setError } =
		useCategoriesStore();
	const { fetchAll } = useCategoriesModel();

	const { fetchBaseList: fetchIncomeCategories } = useBaseFetchList({
		fetchData: (...args) =>
			fetchAll({
				...args,
				type: NCategories.CategoryType.INCOME,
				isDefault: true
			}),
		dataList: incomeCategories,
		setData: setIncomeCategories,
		setIsLoading,
		setError
	});

	return { fetchIncomeCategories };
}
