import { useCategoriesModel } from '@/modules/categories/infrastructure/models';
import { useCategoriesStore } from '@/modules/categories/infrastructure/stores';
import { useBaseFetch } from '@/shared/infrastructure/services';

export const useFetchCategoryService = () => {
	const { setCategory, setIsLoading, setError } = useCategoriesStore();
	const { fetchOne } = useCategoriesModel();

	const { fetchBase: fetchCategory } = useBaseFetch({
		fetchData: fetchOne,
		setData: setCategory,
		setIsLoading,
		setError
	});

	return {
		fetchCategory
	};
};
