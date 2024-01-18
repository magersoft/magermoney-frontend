import { NCategories } from '@/modules/categories/domain';
import { translateCategories } from '@/modules/currencies/utils';

export function mappingCategoriesForPicker(
	categories: NCategories.ICategory[]
) {
	return categories.map((category) => ({
		...category,
		text: translateCategories(category),
		value: category.id
	}));
}
