import { useCategoriesModel } from '@/modules/categories/infrastructure/models';
import { useBaseRemove } from '@/shared/infrastructure/services';

export function useRemoveCategoryService() {
	const { remove } = useCategoriesModel();

	const { confirmRemove: removeCategory } = useBaseRemove({
		handleRemove: remove,
		title: 'categoriesView.removeTitle',
		entityTitle: (entityName) => `${entityName}`
	});

	return {
		removeCategory
	};
}
