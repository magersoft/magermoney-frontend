import { useCategoriesModel } from '@/modules/categories/infrastructure/models';
import { useCategoriesStore } from '@/modules/categories/infrastructure/stores';
import { useBaseFetchList } from '@/shared/infrastructure/services';

export function useFetchCategoriesService() {
	const { categories, setCategories, setIsLoading, setError } =
		useCategoriesStore();
	const { fetchAll } = useCategoriesModel();

	const { fetchBaseList: fetchCategories } = useBaseFetchList({
		fetchData: fetchAll,
		dataList: categories,
		setData: setCategories,
		setIsLoading,
		setError
	});

	return {
		fetchCategories
	};
}
