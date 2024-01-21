import { NCategories } from '@/modules/categories/domain';
import { useCategoriesModel } from '@/modules/categories/infrastructure/models';
import { useCategoriesStore } from '@/modules/categories/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchSavedCategoriesService() {
	const { savedCategories, setSavedCategories, setIsLoading, setError } =
		useCategoriesStore();
	const { fetchAll } = useCategoriesModel();

	const { fetchBaseList: fetchSavedCategories } = useBaseFetchList({
		fetchData: (...args) =>
			fetchAll({
				...args,
				type: NCategories.CategoryType.SAVED,
				isDefault: true
			}),
		dataList: savedCategories,
		setData: setSavedCategories,
		setIsLoading,
		setError
	});

	return {
		fetchSavedCategories
	};
}
