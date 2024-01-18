import { defineStore } from 'pinia';

import { NCategories } from '@/modules/categories/domain';
import { fetchStateInitialState } from '@/shared/domain';
import { useStoreAdapter } from '@/shared/infrastructure/adapters';

const categoriesStore = defineStore('categories', {
	state: (): NCategories.IState => ({
		...fetchStateInitialState,
		categories: [],
		category: null
	}),
	getters: {
		incomesCategories: (state) =>
			state.categories.filter(
				(category) => category.type === NCategories.CategoryType.INCOME
			),
		expensesCategories: (state) =>
			state.categories.filter(
				(category) => category.type === NCategories.CategoryType.EXPENSE
			),
		savedCategories: (state) =>
			state.categories.filter(
				(category) => category.type === NCategories.CategoryType.SAVED
			)
	},
	actions: {
		setCategories(categories: NCategories.ICategory[]) {
			this.categories = categories;
		},
		setCategory(category: NCategories.ICategory) {
			this.category = category;
		},
		setIsLoading(value: boolean) {
			this.isLoading = value;
		},
		setError(error: NCategories.IError | null) {
			this.error = error;
		}
	}
});

export const useCategoriesStore = () => useStoreAdapter(categoriesStore());
