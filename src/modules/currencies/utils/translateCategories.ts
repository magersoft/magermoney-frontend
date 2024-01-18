import { useI18n } from 'vue-i18n';

import { NCategories } from '@/modules/categories/domain';

export function translateCategories(
	category: NCategories.ICategory | NCategories.ICategoryRelation
) {
	const { t } = useI18n();

	return t(
		`categoriesNames.${category.name}`,
		{},
		{ default: category.name, missingWarn: false, fallbackWarn: false }
	);
}
