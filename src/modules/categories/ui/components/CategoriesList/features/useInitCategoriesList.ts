import { useCategories } from '@/modules/categories';

export function useInitCategoriesList() {
	const { fetchCategories, pageSize } = useCategories();

	const fetchData = async () => {
		await fetchCategories({ force: true }, { perPage: unref(pageSize) });
	};

	fetchData();
}
