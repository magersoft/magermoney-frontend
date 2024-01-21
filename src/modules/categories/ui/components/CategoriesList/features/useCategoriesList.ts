import { useI18n } from 'vue-i18n';

import { AppPopups, usePopups } from '@/app/popups';
import { useCategories } from '@/modules/categories';
import { NCategories } from '@/modules/categories/domain';

export function useCategoriesList() {
	const {
		categories,
		page,
		pageSize,
		isLoading,
		isFinished,
		fetchCategories,
		fetchCategoriesPaginated,
		fetchCategory,
		removeCategory
	} = useCategories();

	const { t } = useI18n();

	const { setPopup } = usePopups();

	const isRefreshLoading = ref(false);

	const handleRefresh = async () => {
		isRefreshLoading.value = true;

		await fetchCategories(
			{ force: true, quite: true },
			{ perPage: unref(pageSize) }
		);

		isRefreshLoading.value = false;
	};

	const handleLoadMore = async () => {
		await fetchCategoriesPaginated({
			page: unref(page),
			perPage: unref(pageSize)
		});
	};

	const handleEdit = async (category: NCategories.ICategory) => {
		setPopup(AppPopups.SaveCategory);

		await fetchCategory({ showError: true }, category.id);
	};

	const handleRemove = async (category: NCategories.ICategory) => {
		const isRemovedSuccess = await removeCategory(
			`${t('categoriesView.category').toLowerCase()} «${category.name}»`,
			category.id
		);

		if (isRemovedSuccess) {
			await fetchCategories({ force: true }, { perPage: unref(pageSize) });
		}
	};

	return {
		categories,
		isLoading,
		isFinished,
		isRefreshLoading,
		handleRefresh,
		handleLoadMore,
		handleEdit,
		handleRemove
	};
}
