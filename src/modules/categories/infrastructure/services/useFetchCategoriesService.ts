import { useCategoriesModel } from '@/modules/categories/infrastructure/models';
import { useCategoriesStore } from '@/modules/categories/infrastructure/stores';
import { useBaseFetchPaginated } from '@/shared/infrastructure/services';

export function useFetchCategoriesService() {
	const {
		categories,
		page,
		pageSize,
		setCategories,
		setIsLoading,
		setIsFinished,
		setPage,
		setError
	} = useCategoriesStore();
	const { fetchAll } = useCategoriesModel();

	const {
		fetchBaseList: fetchCategories,
		fetchBasePaginated: fetchCategoriesPaginated
	} = useBaseFetchPaginated({
		fetchData: fetchAll,
		dataList: categories,
		setData: setCategories,
		setIsLoading,
		setIsFinished,
		setError,
		setPage,
		page,
		pageSize
	});

	return {
		fetchCategories,
		fetchCategoriesPaginated
	};
}
